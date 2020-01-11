'use strict';
require('globals'); // Store global.xxx variables
require('prototypes'); // Modify prototypes here
const myFunc = require('myfunctions'); // Adds all functions to myFunc variable
const profiler = require('screeps-profiler');
profiler.enable();
/*//require('memory'); //build memory?
//const _ = require('lodash'); // loads lodash? or already loaded.

//--Game.spawns.Spawn1.spawnTest;  --example from require protos
//--let roleHarvester = require("role.harvester"); -- require to variable? (Can only modify objects/prototypes not set variables from require only.)
*/

/*if (global.hasRespawned()) { // check for respawn. needs fix.
  global.respawn(); // reset flags and meory
}*/

if(global.debug)console.log('#Global has been reset!');
if(global.debug)console.log("#Overhead reset CPU: "+Game.cpu.getUsed()+" for Memory: "+global.memorySize+" bytes"); // Global tick CPU and total Mem size
global.initRoomsMem(); // Ensure constant room features of visable rooms are in memory and structured eg. Sources

global.gcOwnedStructures()

module.exports.loop = function () { // Main Loop
  profiler.wrap(function() {
    if ((Game.time % 100) === 0) {
      for (let name in Memory.creeps) { // Clear memory of old creeps.
        if (!Game.creeps[name]) {
          if(global.debug)console.log("  #Clearing non-existing creep memory: ", name);
          delete Memory.creeps[name];
        }
      }
    }


  })
}
