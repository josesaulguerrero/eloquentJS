/**
 * these functions work like the every array method.
 * @param {*} array
 * @param {*} predicate
 * @returns boolean
 */

const everyUsingALoop = (array, predicate) => {
   for (let i = 0; i < array.length; i++) {
      if (!predicate(array[i])) return false;
   }
   return true;
};

const everyUsingSome = (array, predicate) => {
   if (array.some(!predicate)) return false;
   return true;
};