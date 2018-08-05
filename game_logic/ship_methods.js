//see ../test/ship_tests.js for unit tests

function checkForShip(playerObject, coordinateArray) {
    let shipIsPresent; //indicator
    let ship;          //ship placeholder var
    //loop through each ship to check each of its coords against the test coordinate
    for (let i = 0; i < playerObject.ships.length; i++) {
        ship = playerObject.ships[i];
        //filter the ship locations array for matches against coordinateArray to determine if ship present
        shipIsPresent = ship.locations.filter(function(shipSpot) {
            return ( shipSpot[0] === coordinateArray[0] ) && ( shipSpot[1] === coordinateArray[1] );
        })[0];
        if (shipIsPresent) {
            return ship;
        }
    }
    //if you make it this far, no ship
    return false;

}

module.exports = {
    checkForShip
};
