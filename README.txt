Just a learner project for me to practice using Mocha+Chai for testing and BDD after doing some
tutorials to get used to the basics for them.

Probably not going to do much in terms of backend, because I think all I'll really need to store is,
some game state--a handful of arrays. It would be nice to build out a backend end for the fun of it
but I have a lot of stuff on my plate and kind of want to just bang this out for the practice w/
testing and not turn it in to a full blown app.

I'll make a good effort at all server-side and see what happens.

Game Logic Needs:

--to be capable of simulating the old battlefield board game logic, flow, procedures, etc.
    --two player's data
        --record of various ships for each player
        --record of ship positions for each player
        --record of player shots taken, missed, hit
        --record of damage sustained on each arsenal

    --able to place ships based on starting coord, direction, ship length
        --deny placements overlapping other ships
        --deny placements extending ships out of bounds (10x10 grid)

    --able to "fire": guess locations
        --record hit/miss on guess location

    --able to rotate through turns

    --able to determine when game is over

    --able to determine who won

Generally speaking, an outline of methods:

Player methods:

  ✓ placeShip(player, shipChoice, startingLocation, Direction)
        --player states what ship and where to place.
        --validateLocations is called to check placement validity
        --if valid, ship is placed

  ✓ fireShot(guessLocation, opposingPlayer)
        --players lobs shot at a specified grid location on opposing players map
        --checkForShip is called to check hit/miss status
        --damageShip is called to record damage if hit
        --checkGameStatus is called to initiate change of turns/end of game

✔ Ship methods:

  ✓ checkForShip(player, location)
        --loops through player ship locations for match against check location
        --returns the ship array if ship is present at check location
        --returns false if no ship is present at location

  ✓ validateLocation(player, location)
        --runs checkForShip(player, location)
        --checks if location is within map boundaries
        --true if valid location, else false

  ✓ validateLocations(player, locations)
        --runs validateLocation(player, locations[i]) on list of locations
        --true if all valid, else false

  ✓ damageShip(ship, coordinates)
        --adds coordinates to the damage array associated w/ ship that was hit

Game methods:

    initiateState
        --instantiates a starting game state w/ two player objects
        --players each get empty boards, no damage, and the same set of ships to place
            -- 10x10 own/opponent grids (view should reflect this, game logic will control this implicitly)
            -- 1 x aircraft carrier (length 5)
            -- 1 x battleship (length 4)
            -- 1 x cruiser (length 3)
            -- 2 x destroyer (length 2)
            -- 2 x submarine (length 1)

    checkGameStatus(player1, player2)
        --checks damage logs of each player against their ship logs
            --if each ships.damage deep equal ships.locations, game over
            --else, next turn starts
