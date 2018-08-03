Just a learner project for me to practice using Mocha+Chai for testing and BDD after doing some
tutorials to get used to the basics for them.

Probably not going to do much in terms of backend, because I think all I'll really need to store is,
some game state--a handful of arrays. It would be nice to build out a backend end for the fun of it
but I have a lot of stuff on my plate and kind of want to just bang this out for the practice w/
testing and not turn it in to a full blown app.

I'll make a good effort at all server-side and see what happens.

Needs:
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
