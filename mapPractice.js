const { persons } = require("./users.js");

let uniquePerson = new Map();

persons.forEach(person => {
  uniquePerson.set(person.id, person);
});

console.log(uniquePerson);

// console.log(uniquePerson.size);

// for (let [key, value] of uniquePerson) {
//   value.friends.forEach((friend, index) => {
//     let getFriendValue = getReturns(friend);
//     value.friends[index] = getFriendValue;
//   })
//   console.log(key, value);
// }

// function getReturns(kaibigan) {
//   let returnObjectOfAnID;
//   for (let [key, value] of uniquePerson) {
//     value.friends.forEach(() => {
//       if (key === kaibigan) {
//         returnObjectOfAnID = value;
//       }
//     })
//   }
//   return returnObjectOfAnID;
// }
