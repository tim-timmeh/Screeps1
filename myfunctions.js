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



};
