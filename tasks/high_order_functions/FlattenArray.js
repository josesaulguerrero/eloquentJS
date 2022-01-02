/**
 * flatten takes an array of arrays and flattens it.
 * @param {*} array
 * @returns flattened array
 */
const flatten = (array) => {
   return array.reduce((accumulator, item) => {
      return accumulator.concat(item);
   }, []);
};