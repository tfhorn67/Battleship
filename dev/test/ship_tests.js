const expect = require('chai').expect;

describe('SHIP METHODS', function() {
    describe('checkForShip', function() {
        const checkForShip = require('../game_logic/ship_methods.js').checkForShip;
        let player;
        //Mock up a player object to pass into checkForShip tests
        before(function() {
            player = {
                ships: [
                    {
                        locations: [[0, 0], [0, 1]]
                    },
                    {
                        locations: [[1, 0], [1, 1], [1, 2]]
                    },
                    {
                        locations: [[2, 0], [2, 1], [2, 2], [2, 3]]
                    }
                ]
            }
        });

        it('should report no ship if at empty location', function() {
            expect(checkForShip(player, [9, 9])).to.be.false;
        });

        it('should report ship if at occupied location', function() {
            expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
        });

        it('should handle ships occupying multiple locations', function() {
            expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
            expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
            expect(checkForShip(player, [9, 9])).to.be.false;
        });

        it('should handle checking multiple ships and multiple locations on them', function() {
            expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
            expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1]);
            expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1]);
            expect(checkForShip(player, [2, 0])).to.deep.equal(player.ships[2]);
            expect(checkForShip(player, [2, 1])).to.deep.equal(player.ships[2]);
            expect(checkForShip(player, [2, 2])).to.deep.equal(player.ships[2]);
            expect(checkForShip(player, [2, 3])).to.deep.equal(player.ships[2]);
            expect(checkForShip(player, [9, 9])).to.deep.false;
        });

    });

    describe('validateLocation', function() {
        const validateLocation = require('../game_logic/ship_methods.js').validateLocation;
        let player;
        //Mock up a player object to pass into checkForShip tests
        before(function() {
            player = {
                ships: [
                    {
                        locations: [[0, 0], [0, 1]]
                    },
                    {
                        locations: [[1, 0], [1, 1], [1, 2]]
                    },
                    {
                        locations: [[2, 0], [2, 1], [2, 2], [2, 3]]
                    }
                ]
            }
        });

        it('should report valid for unoccupied locations within board domain', function() {
            //loosely equal to true should be fine here. mostly concerned with failing invalid locations
            expect(validateLocation(player, [9, 9])).to.be.ok;
        });

        it('should report INvalid for occupied locations within board domain', function() {
            expect(validateLocation(player, [0, 0])).to.be.false;
        });

        it('should report INvalid for ANY location outside of board domain', function () {
            expect(validateLocation(player, [10, 10])).to.be.false;
        });

    });

    describe('validateLocations', function() {
        const validateLocations = require('../game_logic/ship_methods.js').validateLocations;
        let player;
        //Mock up a player object to pass into checkForShip tests
        before(function() {
            player = {
                ships: [
                    {
                        locations: [[0, 0], [0, 1]]
                    },
                    {
                        locations: [[1, 0], [1, 1], [1, 2]]
                    },
                    {
                        locations: [[2, 0], [2, 1], [2, 2], [2, 3]]
                    }
                ]
            }
        });

        it('should report valid if all locations are in domain and unoccupied', function() {
            expect(validateLocations(player, [[5, 0], [5, 1], [5, 2], [5, 3]])).to.be.ok;
        });

        it('should report invalid if any location is occupied or out of domain', function() {
            expect(validateLocations(player, [[5, 8], [5, 9], [5, 10]])).to.be.false;
            expect(validateLocations(player, [[1, 3], [2, 3], [3, 3]])).to.be.false;
        });
    });

    describe('damageShip', function() {
        const damageShip = require('../game_logic/ship_methods.js').damageShip

        it('should assign damage to the specified coordinates on the a ship', function() {
            let ship = {
                locations: [[0,0]],
                damage: []
            };

            damageShip(ship, [0, 0])

            expect(ship.damage).to.not.be.empty;
            expect(ship.damage[0]).to.deep.equal([0, 0]);
        });
    });
});
