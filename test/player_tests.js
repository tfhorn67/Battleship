const expect = require('chai').expect;

describe('PLAYER METHODS', function() {


    describe('placeShip', function() {
        const placeShip = require('../game_logic/player_methods.js').placeShip;
        //mock up player objects, with some ships assigned locations and others not
        let player
        beforeEach(function() {
            player = {
                ships: [
                    {
                        size: 1,
                        locations: []
                    },
                    {
                        size: 2,
                        locations: [[1, 0], [1, 1]]
                    },
                    {
                        size: 3,
                        locations: []
                    }
                ]
            };
        });

        it('should throw an error if the direction is omitted', function(){
            const ship = player.ships[0];
            const coords = [0, 1];

            let handler = function() { placeShip(player, ship, coords) };
            expect(handler).to.throw(Error);

        });

        it('should update ship with a valid starting location', function() {
            const ship = player.ships[0];
            const coords = [0, 1];

            placeShip(player, ship, coords, 'horizontal');
            let placement = ship.locations;

            expect(placement).to.be.ok;
            expect(placement).to.have.length(1);
            expect(placement[0]).to.deep.equal([0, 1]);
        });

        it('should record all ship placement locations if all valid', function() {
            const ship = player.ships[2];
            const coords = [0, 1];

            //should result in no invalid locs w/ vertical placement from [0,1]...
            placeShip(player, ship, coords, 'vertical');
            let placement = ship.locations;

            expect(placement).to.be.ok;
            expect(placement).to.have.length(3);
            expect(placement).to.deep.equal([[0, 1], [0, 2], [0, 3]]);
        });

        it('should throw an error &/or halt placement if any proposed locations are invalid', function() {
            const ship = player.ships[2];
            const coords = [0, 1];

            //should result in a conflict loc w/ horizontal placement from [0,1]...
            let handler = placeShip(player, ship, coords, 'horizontal');
            let placement = ship.locations;

            expect(handler).to.be.false;
            expect(placement).to.have.length(0);
            expect(placement).to.deep.equal([]);
        });
    });


    describe('fireShot', function() {
        const fireShot = require('../game_logic/player_methods.js').fireShot;
        //mock up player objects, with some ships assigned locations and others not
        let opposingPlayer
        beforeEach(function() {
            opposingPlayer = {
                ships: [
                    {
                        size: 1,
                        locations: [[3, 3]],
                        damage: [[3, 3]]
                    },
                    {
                        size: 2,
                        locations: [[1, 0], [1, 1]],
                        damage: []
                    },
                    {
                        size: 3,
                        locations: [[4, 5], [5, 5], [5, 6]],
                        damage: []
                    }
                ]
            };
        });

        it('should return false if no hit', function() {
            let volley = fireShot([9, 9], opposingPlayer);
            expect(volley).to.be.false;
        });

        it('should return true if hit', function() {
            fireShot([1, 0], opposingPlayer);
            let hitShipDamage = opposingPlayer.ships[1].damage[0];
            expect(hitShipDamage).to.deep.equal([1, 0]);
        });
    });
});
