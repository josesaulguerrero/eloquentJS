/**
 * this recursive functions helps you find out whether two values are identically equal, no matter if they are objects.
 * @param {*} valueOne
 * @param {*} valueTwo
 * @returns boolean
 */

const deepEqual = (valueOne, valueTwo) => {
   if (valueOne instanceof Array && valueTwo instanceof Array) {
      /* this conditional will be checked ONLY if the values are arrays. */
      if (valueOne.length === valueTwo.length) {
         // if both arrays have the same length, do:
         for (let i = 0; i < valueOne.length; i++) {
            if (!deepEqual(valueOne[i], valueTwo[i])) {
               return false;
            }
         }
         return true;
      } else {
         //if they have different lengths, they can't be equal.
         return false;
      }
   } else if (valueOne instanceof Object && valueTwo instanceof Object && !Array.isArray(valueOne) && !Array.isArray(valueTwo)) {
      /* this conditional will be checked ONLY if the values are objects. */
      if (Object.keys(valueOne).length === Object.keys(valueTwo).length) {
         //if the objects have the same amount of properties, do:
         const keys = Object.keys(valueOne);
         for (let i = 0; i < keys.length; i++) {
            if (!deepEqual(valueOne[keys[i]], valueTwo[keys[i]])) {
               return false;
            }
         }
         return true;
      } else {
         //if one has more properties than the other, then they can't be equal.
         return false;
      }
   } else if (valueOne === valueTwo) {
      // if the values aren't arrays or objects, it means they are probably numbers, strings, undefined or null, so we can simply check whether they are identically equal.
      return true;
   } else {
      // if none of the above conditions is met, it means the values aren't equal at all and we can simply return false.
      return false;
   }
};