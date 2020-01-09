"use strict";
require('globals'); //Store global.xxx variables
require('prototypes'); //Modify prototypes here?
const myFunc = require('myfunctions');
var _ = require('lodash');
//Game.spawns.Spawn1.spawnTest;  --example from require protos
//var roleHarvester = require("role.harvester"); -- require to variable? (Can only modify objects/prototypes not set variables from require only.)
Memory.ownedRooms = myFunc.convertArrayToObject(Object.values(Game.rooms).filter(room => room.controller.my),'name'); //List of Controlled Rooms Object by Name
console.log('Rooms init to mem:' + Object.keys(Memory.ownedRooms));
// Object.keys(Memory.ownedRooms) gets array of

module.exports.loop = function () { // Main Loop
  // Clear memory of old creeps.
  for (var name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log("Clearing non-existing creep memory: ", name);
    }
  }
  // Multi room - run code on each room
  for (var controlledRoom in controlledRooms) {

  }
}
