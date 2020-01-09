module.exports = {

  convertArrayToObject: function(array, key) { // Converts an array to object with key as the key
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item,
      };
    }, initialValue);
  }


  /*
  converArrayToObject: function(array, key) {
    const result = {};
    for (let i = 0; i < array.length; i++) {
      result[array[i].key] = array[i];
    };
    return result;
  };
  */



};
