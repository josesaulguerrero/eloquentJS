/**
 * The range function takes two parameters and returns an array which contains all numbers from "start" up to "end" (There is an optional parameter which indicates the "step" value).
 * @param {*} start
 * @param {*} end
 * @param {*} step (optional) if no value is given, it will default to 1
 * @returns array
 */
const range = (start, end, step = 1) => {
   let i = start;
   let array = [];
   if (start < end) {
      while (i <= end) {
         array.push(i);
         i += step;
      }
   } else {
      while (i >= end) {
         array.push(i);
         i -= step;
      }
   }
   return array;
};

/**
 * SumUp takes an array and returns the sum of all the elements contained in the array.
 * @param {*} array
 * @returns sum
 */
const sumUp = (array) => {
   let sum = 0;
   for (let i = 0; i < array.length; i++) {
      sum += parseFloat(array[i]);
   }
   return sum;
};

console.log(sumUp(range(1, 10, 2)));