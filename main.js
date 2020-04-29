'use strict';
require('config'); // Custom config here
require('globals'); // Stored global.xxx variables
require('prototypes'); // Modified prototypes here
const operation = require('operation'); // Operation globals?
const mission = require('mission'); // Mission globals?
const myFunc = require('myfunctions'); // Adds random global functions to myFunc variable
const profiler = require('screeps-profiler');
profiler.enable();


/*//require('memory'); //build memory?
//const _ = require('lodash'); // loads lodash? or already loaded.

//--Game.spawns.Spawn1.spawnTest;  --example from require protos
//--let roleHarvester = require("role.harvester"); -- require to variable? (Can only modify objects/prototypes not set variables from require only.)
*/

if (global.hasRespawned()) { // check for respawn. needs fix.
  console.log('******* RESPAWN DETECTED ********')
  global.respawn(); // reset flags and meory
}

if(global.debug)console.log(`#Global has been reset!\n#Overhead reset CPU: ${Game.cpu.getUsed().toFixed(2)} (${(Game.cpu.getUsed()/Game.cpu.limit*100).toFixed(2) || '(sim)'}%), Memory: ${global.memorySize/1000} KB(${(global.memorySize/2048000*100).toFixed(2)}%)`);

global.initRoomsMem(); // Ensure constant room features of visable rooms are in memory and structured eg. Sources
global.gcOwnedStructures() // Garbage Cleanup old buildings
global.profilerGlobalReset.set() //

module.exports.loop = function () { // Main Loop
  profiler.wrap(function() {

    global.profilerGlobalReset.run()

    if ((Game.time % 100) === 0) { // Clear memory of old creeps.
      for (let name in Memory.creeps) {
        if (!Game.creeps[name]) {
          if(global.debug)console.log("  #Clearing non-existing creep memory: ", name);
          delete Memory.creeps[name];
        }
      }
    }

    //Init - Information is gathered about the game state and game objects instantiated
    let operations = operation.getOperations();
    for (let operation of operations) operation.init();
    //RoleCall - Find creeps belonging to missions and spawn any additional needed.

    //Actions - Actions that change the game state are executed in this phase.

    //Finalize - Code that needs to run post-actions phase

    //Post Operation Actions And Utilities
    myFunc.exportStats()
  });

}
