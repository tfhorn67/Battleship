const expect = require('chai').expect;

describe('GAME METHODS', function() {


    describe('initiatePlayer', function() {
        const initiatePlayer = require('../game_logic/game_methods.js').initiatePlayer;

        it('should create player objects w/ correct ship sets etc.', function() {
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

            let player1 = initiatePlayer()

            expect(player1).to.deep.equal(startingPlayerObj);

        });
    });


    describe('switchTurns', function() {
        const switchTurns = require('../game_logic/game_methods.js').switchTurns;

        it('Should switch current player from 1 to 2', function() {
            let currentPlayer = 1;
            currentPlayer = switchTurns(currentPlayer);
            expect(currentPlayer).to.equal(2);
        });
        it('Should switch current player from 2 to 1', function() {
            let currentPlayer = 2;
            currentPlayer = switchTurns(currentPlayer);
            expect(currentPlayer).to.equal(1);
        });
    });
});
