'use strict'
// Custom functions reusable in code
module.exports = {

  convertArrayToObject: function(array, key) { // Converts an array to object with key as the key
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item,
      };
    }, initialValue);
  },

  isEmpty: function(obj) { // Is object empty?
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }


  //----- Using room.prototype.sources instead.
  // addRoomSources: function (visableRoom){
  //   let sources = visableRoom.find(FIND_SOURCES);
  //   console.log(`Sources Found in ${visableRoom} - ${sources}`);
  //   let obj = {}
  //   for(let i in sources){
  //     let source = sources[i];
  //     obj[source.id] = {};
  //     //source.memory.workers = source.memory.workers || 0;
  //   }
  //   console.log(obj);
  //   return obj
  // }



};



// let setValue = (propertyPath, value, obj) => {
//   // this is a super simple parsing, you will want to make this more complex to handle correctly any path
//   // it will split by the dots at first and then simply pass along the array (on next iterations)
//   let properties = Array.isArray(propertyPath) ? propertyPath : propertyPath.split(".")
//   // Not yet at the last property so keep digging
//   if (properties.length > 1) {
//     // The property doesn't exists OR is not an object (and so we overwritte it) so we create it
//     if (!obj.hasOwnProperty(properties[0]) || typeof obj[properties[0]] !== "object") obj[properties[0]] = {}
//       // We iterate.
//     return setValue(properties.slice(1), value, obj[properties[0]])
//       // This is the last property - the one where to set the value
//   } else {
//     // We set the value to the last property
//     obj[properties[0]] = value
//     return true // this is the end
//   }
// }
// let our = {
//   adventure: {
//     is: {
//       getting: {
//       anotherThere: '4'
//       }
//     }
//   }
// }
// setValue("adventure.is.getting.there", true, our)

// function checkNested(obj, level,  ...rest) {
//   if (obj === undefined) return false
//   if (rest.length == 0 && obj.hasOwnProperty(level)) return true
//   return checkNested(obj[level], ...rest)
// }
