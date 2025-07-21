# Version 0.1.001 (July 21, 2025)
## The Early Access Update (Patch 1)
Stability, polish, and bug fixes!

---

**Patch notes may contain spoilers for Story Mode, be warned.**

The first big set of patch notes for the game, epic. This is just a minor update to address some bugs and unpolished issues. This update, and probably all of the updates before 0.2.000 are just going to be fixing, polishing, and re-balancing anything that didn't get enough attention during development. So let's get into what's changed since release!

---



### General

#### Additions

- Updated music credits to include all songs.
- Added "enemies digitized" stat.
- Slimers now have an audio cue when they reform.
- Updated crate sprites, added unique hit particles and bit sprites.
- Updated poop sprites.

#### Bug Fixes

- I forgot to update some cursor logic after I finished recording footage for the trailer (oops). That's fixed now.
- Gluer sticks no longer freeze up if unable to charge at the player (I used an underscore instead of a dash, sad).
- Bytebourger kills are now properly tracked.
    - Zip Bombers, Patchers, The Board Mother, CPU, and Overclocked CPU are no longer considered Rulerian enemies.
- All versions of Terry now have the proper palette sprite.
- Player bullets now take into account the pierce of enemy bullets rather than instantly killing them.
- Crates no longer have darkness hit particles.
- The player's invincibility frames no longer deplete when the game is paused (hit pause, in the level up menu, in the pause menu, etc).
- Fixed various bugs regarding small and medium slimers reforming.
- Fixed a ton of bugs with digitizing enemies:
    - Digitized reanimators no longer do... that.
    - Digitized enemies no longer generate on hit objects.
    - Digitized enemies are now digitized before applying any other damage effects.
    - Reanimators no longer randomly crash the game after reanimating something.
    - Digitized enemies no longer check for wall collisions.
    - Digitizing a corrector fluid bottle no longer spawns a floating bottle and now kills the brush piloting the bottle.
    - Digitized slimers now do the proper death things.
- Polished the following enemy sprites:
    - Staple Remover.
    - Ruler.
    - Gluer.
    - Stapler.
    - Corrector Fluid.
    - Penciler.
    - Gluer Stick.
    - Taper.
    - Slimer (all sizes).



### Story Mode

#### Bug Fixes

- In cutscenes, if the current speaker isn't present in the game scene, the camera will now focus on the player rather than stop moving wherever it was.
- Defeating Terry early in Chapter 61 now causes the Clipenberg Elite Squad to spawn after 1 second.
- "Clipenberg's Finest" achievement should now triggers properly.
- Triggers for beating the game and unlocking floors 2 and 3 are now properly triggered.



### Infinite Mode

#### Improvements

- Infinite Mode enemy spawners now have a short grace period at the beginning of the wave before spawning enemies.
- Some walls in Western Ruleria now have the appropriate hit particles.
- Some bushes in Western Ruleria no longer draw above the fence.
- Some walls in Quillshire Prison now have the appropriate hit particles.
- Some walls in The Secluded Cabin now have the appropriate hit particles.
- Some walls in Inkwell Bridge now have the appropriate hit particles.
- Some walls in Papyrus Prairie now have the appropriate hit particles.
- Some walls in Measureton now have the appropriate hit particles.
- Some walls in Measureton Sewers now have the appropriate hit particles.
- Some walls in Stationary Station Delta now have the appropriate hit particles.

#### Bug Fixes

- Restarting an Infinite Mode run no longer softlocks the game.
- Verified integrity of enemy spawning. Also, improved the logic a bit. That one really doesn't matter for the gameplay, that's just for the real commando heads.
- The War Profiteer can now use floor 3 weapons.
- Shop dialogue now updates between waves.
- Leaderboard buttons now draw over chalk backgrounds.
