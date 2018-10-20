//!function() { //wrapper IFFE
    let player1,
        player2,
        currentPlayer,
        turnCounter;

    /**************************************************************************************************
                            PLAYER METHODS
    **************************************************************************************************/

    function placeShip(playerObj, shipArr, startingLocation, shipDirection) {
        if ( !shipDirection ) {
            throw Error('Hey, you forgot the direction. I need that for maths!');
        }

        //need to establish a coordinate system and hold our last location for incrementing to the next
        let proposedLocations = [];
        let previousLocation;
        let rowNumber;
        let columnNumber;

        //Fill proposedLocations with coordinates corresponding to startingLocation, direction & length
        for (let i = 0; i < shipArr.size; i++) {
            //set previousLocation to [] if i === 0, or to proposedLocations[i - 1] if i > 0
            previousLocation = proposedLocations[i - 1] || [];
            rowNumber = previousLocation[1];    //y coordinate
            columnNumber = previousLocation[0]; //x coordinate

            proposedLocations[i] = (i === 0)
                ? startingLocation //if i === 0, propLoc = startLoc
                : (shipDirection === 'vertical') //else, we increment
                    ? [columnNumber, ++rowNumber] //if vertical && i > 0 propLoc[i] = [colNum, ++rowNum]
                    : [++columnNumber, rowNumber];//if horiz. && i > 0 propLoc[i] = [++colNum, rowNum]
        }

        //Now we should have proposedLocations populated w/ the desired array of coordinate
        //So we need to check each of the coords & validate them, then reject/approve the proposal
        if ( validateLocations(playerObj, proposedLocations) ) {
            shipArr.locations = proposedLocations;
            return true;
        }

        //if we've made it this far, must be a reject proposal
        return false;

    }

    function fireShot(guessLocationArr, opposingPlayerObj) {
        let shipHere = checkForShip(opposingPlayerObj, guessLocationArr);

        //checkForShip returns relevant ship object if ship present, or false if space is empty
        if ( !shipHere ) {
            //return false for no hit
            return false;
        }

        //if past else block, ship is present, hit and subsequent damage should be recorded
        return damageShip(shipHere, guessLocationArr);
    }

    /**************************************************************************************************
                            /PLAYER METHODS
    **************************************************************************************************/

    /**************************************************************************************************
                            SHIP METHODS
    **************************************************************************************************/

    function checkForShip(playerObj, coordinateArr) {
        let shipIsPresent; //indicator
        let ship;          //ship placeholder var
        //loop through each ship to check each of its coords against the test coordinate
        for (let i = 0; i < playerObj.ships.length; i++) {
            ship = playerObj.ships[i];
            //filter the ship locations array for matches against coordinateArray to determine if ship present
            shipIsPresent = ship.locations.filter(function(shipSpot) {
                return ( shipSpot[0] === coordinateArr[0] ) && ( shipSpot[1] === coordinateArr[1] );
            })[0];
            if (shipIsPresent) {
                return ship;
            }
        }
        //if you make it this far, no ship
        return false;

    }

    function validateLocation(playerObj, coordinateArr) {
        const spaceOpen = !checkForShip(playerObj, coordinateArr);
        //make sure it's in domain and them make sure its unoccupied
        if ((coordinateArr[0] >= 0 && coordinateArr[0] <= 9) && (coordinateArr[1] >= 0 && coordinateArr[1] <= 9)) {
            return spaceOpen;
        } else {
            return false;
        }

    }

    function validateLocations(playerObj, coordinatesArr) {
        //map the array with validateLocation() to generate a list of booleans
        let validated = coordinatesArr.map(function(coordinateArr){
            return validateLocation(playerObj, coordinateArr);
        });
        //if no falses in list, return true. if false present, return false
        return validated.indexOf(false) === -1;
    }

    function damageShip(shipObj, coordinatesArr) {
        return shipObj.damage.push(coordinatesArr);
    }

    /**************************************************************************************************
                            /SHIP METHODS
    **************************************************************************************************/

    /**************************************************************************************************
                            GAME METHODS
    **************************************************************************************************/

    function initiatePlayer() {
        let startingPlayerObj = {
            ships: [
                {
                    name: 'Aircraft Carrier',
                    size: 5,
                    locations: [],
                    damage: []
                },
                {
                    name: 'Battleship',
                    size: 4,
                    locations: [],
                    damage: []
                },
                {
                    name: 'Cruiser',
                    size: 3,
                    locations: [],
                    damage: []
                },
                {
                    name: 'Destroyer 1',
                    size: 2,
                    locations: [],
                    damage: []
                },
                {
                    name: 'Destroyer 2',
                    size: 2,
                    locations: [],
                    damage: []
                },
                {
                    name: 'Submarine 1',
                    size: 1,
                    locations: [],
                    damage: []
                },
                {
                    name: 'Submarine 2',
                    size: 1,
                    locations: [],
                    damage: []
                },
            ],
            missedShots: [],
            confirmedHits: []
        }

        return startingPlayerObj;
    }

    function switchTurns(player) {
        if (player === 1) {
            return player = 2;
        } else {
            return player = 1;
        }
    }

    /**************************************************************************************************
                            /GAME METHODS
    **************************************************************************************************/

    /**************************************************************************************************
                            EVENT HANDLERS
    **************************************************************************************************/

    document.addEventListener('DOMContentLoaded', () => {
        const fireShot = document.getElementById('fireShot');
        const placeShip = document.getElementById('placeShip');
        //initiate players and game
        player1 = initiatePlayer();
        player2 = initiatePlayer();
        currentPlayer = 1;
        turnCounter = 0;

        placeShip.addEventListener('submit', (event) => {

        });

        fireShot.addEventListener('click', (event) => {
            //finally, switch turns
            currentPlayer = switchTurns(currentPlayer);
            turnCounter++;
        });
    });

    /**************************************************************************************************
                            /EVENT HANDLERS
    **************************************************************************************************/

//}(); // /wrapper IFFE
