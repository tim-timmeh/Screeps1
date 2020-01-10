'use strict';
require('globals'); //Store global.xxx variables
require('prototypes'); //Modify prototypes here
//require('memory'); //build memory?
const myFunc = require('myfunctions');
//const _ = require('lodash'); // loads lodash? or already loaded.

//--Game.spawns.Spawn1.spawnTest;  --example from require protos
//--var roleHarvester = require("role.harvester"); -- require to variable? (Can only modify objects/prototypes not set variables from require only.)
if(global.debug)console.log('#Global has been reset.');
global.initRoomsMem(); // Ensure constant room features of visable rooms are in memory and structured eg. Sources

module.exports.loop = function () { // Main Loop

  for (let name in Memory.creeps) { // Clear memory of old creeps.
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log("Clearing non-existing creep memory: ", name);
    }
  }

}
