const arrayToList = (array) => {
   let List = null;
   for (let i = 0; i < array.length; i++) {
      const value = array[i];
      if (!List) {
         List = {
            value,
            next: null,
         };
      } else {
         let currentNode = List;
         while (currentNode.next) {
            currentNode = currentNode.next;
         }
         currentNode.next = {
            value,
            next: null,
         };
      }
   }
   return List;
};


const listToArray = (List) => {
   const array = [];
   currentNode = List;
   if (!List) {
      return "no list was given...";
   }
   while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
   }
   return array;
};

const prepend = (element, List) => {
   return {
      value: element,
      next: JSON.parse(JSON.stringify(List))
   };
};

const nth = (index, List) => {
   if (!List) {
      return "the list is either empty or undefined...";
   }
   let counter = 0;
   let currentNode = List;
   while (true) {
      if (counter === index) {
         return currentNode;
      } else {
         if (!currentNode.next) {
            return "there is no node at the given index...";
         }
         currentNode = currentNode.next;
         counter++;
      }
   }
};

const recursiveNth = (index, List) => {
   if (!List) {
      return "the list is either empty or undefined...";
   }
   let currentNode = List;
   if (index === 0) {
      return currentNode;
   } else if (!currentNode.next) {
      return "there is no node at the given index...";
   } else {
      return recursiveNth(index -= 1, currentNode.next);
   }
};