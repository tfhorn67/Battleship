
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

//keep a currentPlayer variable. switchTurns alternates current player btw. 1 & 2.
function switchTurns(turn, player1Obj, player2Obj) {
    if (turn === 0 || turn%2 === 0) {
        return player2Obj;
    } else {
        return player1Obj;
    }
}

module.exports = {
    initiatePlayer: initiatePlayer,
    switchTurns: switchTurns
    //checkGameStatus: checkGameStatus
}
