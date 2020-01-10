'use strict'
//-----------Hotkeys / Ideas / Code Snippets
{Hotkeys
-ctrl+click enter txt different places
-ctr+/ comment out selection
-ctrl+alt+[ or ] fold section
-ctrl+alt+shift[ or ] fold all
-ctrl+d select next word
-alt+f3 select all words
-ctrl+tab auto indent //custom('atom-text-editor': 'ctrl-tab': 'editor:auto-indent')
}
//---------- Ideas
{Spawn Queue
  -Spawn Priority
  -Keeping Ratio

Job Queue
  -Build Queue
  -Fill Queue

Combat Queue

}
//--------- Code Snippets
{Prototype example from screeps
https://docs.screeps.com/contributed/modifying-prototypes.html
Just like with prototype functions, there are also non-function prototype properties like .name from the Creep.
You can use  Object.defineProperty and Object.defineProperties.

Object.defineProperty(Room.prototype, 'sources', {
  get: function() {
    // If we dont have the value stored locally
    if (!this._sources) {
      // If we dont have the value stored in memory
      if (!this.memory.sources) {
        // Find the sources and store their id's in memory,
        // NOT the full objects
        this.memory.sources = this.find(FIND_SOURCES)
        .map(source => source.id);
      }
      // Get the source objects from the id's in memory and store them locally
      this._sources = this.memory.sources.map(id => Game.getObjectById(id));
    }
    // return the locally stored value
    return this._sources;
  },
  set: function(newValue) {
    // when storing in memory you will want to change the setter
    // to set the memory value as well as the local value
    this.memory.sources = newValue.map(source => source.id);
    this._sources = newValue;
  },
  enumerable: false,
  configurable: true
});
}
//--------- Old Codes
{adding source to memory attempt 10/1/2020
let visableRooms = myFunc.convertArrayToObject(Object.values(Game.rooms),'name');
for (let visableRoom in visableRooms){
  //Memory.rooms[visableRoom] = Memory.rooms[visableRoom] || {};

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
console.log('Rooms init to mem:' + Object.keys(Memory.rooms.ownedRooms)); // Get memory object keys
}
