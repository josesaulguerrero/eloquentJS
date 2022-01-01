/**
 * reverseArray takes an array and returns a brand new one which has the same elements in the inverse order.
 * @param {*} array
 * @returns reversed array
 */
const reverseArray = (array) => {
   const newArray = [];
   for (let i = 0; i < array.length; i++) {
      newArray.unshift(array[i]);
   }
   return newArray;
};

/**
 * reverseArrayInPlace takes and array and MODIFIES it by reversing its items.
 * @param {*} array
 */
const reverseArrayInPlace = (array) => {
   let copy = [...array];
   let i = 0;
   while (i < array.length) {
      array[i] = copy.pop();
      i++;
   }
};
