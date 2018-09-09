const checkForShip = require('./ship_methods.js').checkForShip;
const validateLocation = require('./ship_methods.js').validateLocation;
const validateLocations = require('./ship_methods.js').validateLocations;


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

}

module.exports = {
    placeShip: placeShip,
    fireShot: fireShot
}
