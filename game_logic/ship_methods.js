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

    if ((coordinateArr[0] >= 0 && coordinateArr[0] <= 9) && (coordinateArr[1] >= 0 && coordinateArr[1] <= 9)) {
        return spaceOpen;
    } else {
        return false;
    }

}

module.exports = {
    checkForShip,
    validateLocation
};
