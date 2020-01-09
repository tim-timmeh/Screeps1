"use strict";
require('globals'); //Store global.xxx variables
require('prototypes'); //Modify prototypes here?
const myFunc = require('myfunctions');
const _ = require('lodash');
//Game.spawns.Spawn1.spawnTest;  --example from require protos
//var roleHarvester = require("role.harvester"); -- require to variable? (Can only modify objects/prototypes not set variables from require only.)

//This will replace memory. need to add to it only.
if (!Memory.rooms){
  Memory.rooms = {}
}
Memory.rooms.unOwnedRooms = myFunc.convertArrayToObject(Object.values(Game.rooms).filter(room => !room.controller.my),'name'); //List of Uncontrolled Rooms Object by Name
Memory.rooms.ownedRooms = myFunc.convertArrayToObject(Object.values(Game.rooms).filter(room => room.controller.my),'name'); //List of Controlled Rooms Object by Name

// Need to turn this into a prototype for something, then initialize with it on each room? Creep? eg. if (!memory.room[creep.room]){creep.scoutRoom} See zIdeas
for (let roomName in Memory.rooms.ownedRooms) {
  let room = Game.rooms[roomName];
  console.log(room);
  console.log(Memory.rooms.ownedRooms[room.name]);
  if(!Memory.rooms.ownedRooms[room.name].sources) {
    Memory.rooms.ownedRooms[room.name].sources = {};
    let sources = room.find(FIND_SOURCES);
    console.log(sources);
    for(let i in sources){
      let source = sources[i];
      source.memory = Memory.rooms.ownedRooms[room.name].sources[source.id] = {};
      source.memory.workers = 0;
    }
  }
}

console.log('Rooms init to mem:' + Object.keys(Memory.ownedRooms));
// Object.keys(Memory.ownedRooms) gets array of

module.exports.loop = function () { // Main Loop
  // Clear memory of old creeps.
  for (let name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log("Clearing non-existing creep memory: ", name);
    }
  }
  // Multi room - run code on each room
  for (let controlledRoom in Memory.ownedRooms) {

  }
}
