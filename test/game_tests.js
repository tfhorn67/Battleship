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

        let player1, player2;
        beforeEach(function() {
            player1 = {
                ships: [
                    {
                        name: 'Aircraft Carrier',
                        size: 5,
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
                        name: 'Submarine 1',
                        size: 1,
                        locations: [],
                        damage: []
                    },
                ],
                missedShots: [],
                confirmedHits: []
            };

            player2 = {
                ships: [
                    {
                        name: 'Battleship',
                        size: 4,
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
                        name: 'Submarine 2',
                        size: 1,
                        locations: [],
                        damage: []
                    },
                ],
                missedShots: [],
                confirmedHits: []
            };
        });

        it('Should switch current player from player1 to player2', function() {
            let currentPlayer = player1;
            let turn = 0;
            currentPlayer = switchTurns(turn, player1, player2);
            expect(currentPlayer).to.deep.equal(player2);
        });
        it('Should switch current player from 2 to 1', function() {
            let currentPlayer = player2;
            turn = 1;
            currentPlayer = switchTurns(turn, player1, player2);
            expect(currentPlayer).to.deep.equal(player1);
        });
    });
});
