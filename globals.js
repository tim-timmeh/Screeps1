'use strict'
// Globals not related to specific objects

global.test1 = 'this is global.test1' // Test global that works

global.debug = true //#debug to console

global.initRoomsMem = function() { // Ensure const room features of visable rooms are in mem eg. Sources
  if (global.debug) console.log('#Checking For Missing Visable Room Memory...');
  for (let visableRoomName in Game.rooms){ //Iterate over all visable rooms
    Game.rooms[visableRoomName].sources;//Get stored room sources, Set if none stored via Room Prototype
  }
  if (global.debug) console.log('#Visable Room Memory Check Complete.')
}
