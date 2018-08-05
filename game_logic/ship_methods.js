//see ../test/ship_tests.js for unit tests

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

module.exports = {
    checkForShip,
    validateLocation,
    validateLocations
};
