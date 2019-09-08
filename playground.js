const _ = require("lodash");


const list = [
  {
    "ID": 1
  },
  {
    "ID": 2
  },
  {
    "ID": 3,
    "parentID": 1
  },
  {
    "ID": 4,
    "parentID": 3
  },
  {
    "ID": 5
  },
  {
    "ID": 6,
    "parentID": 3
  },
  {
    "ID": 7,
    "parentID": 2
  },
  {
    "ID": 8,
    "parentID": 4
  },
  {
    "ID": 9,
    "parentID": 1
  },
  {
    "ID": 10,
    "parentID": 9
  }
];



function getTopParents(array) {
  return array.filter(item => !item.parentID);
}

getTopParents(list);



function getChildItems(array, id) {
  const newList = array.filter(item =>
    item.parentID === id
  );
  return newList;
}

console.log("getChildItems(list) ", getChildItems(list, 3));


// list.forEach(item => {
//   if (!item.parentID) {
//     target[item.ID] = item;
//     //  console.log("item ", item);
//   }
// });
// console.log("list 1111", list);

// list.forEach(item => {
//   const xxx = target[item.parentID];
//   if (xxx) {
//     if (!target[xxx.ID].children) {
//       target[xxx.ID].children = {};
//     }
//     target[xxx.ID].children[item.ID] = item;
//   }
//   // console.log("xxx ", xxx);

// });

// console.log("list 2222", list);
// list.forEach((item) => {

//   console.log(item, "item");
//   console.log(item.children, "item.children");

//   // console.log("target", target);
//   if (item.children && item.parentID) {
//     // console.log(item.children, "item.children");
//     console.log("target[item.ID] ", target[item.ID]);
//     console.log("target[item.ID].children ", target[item.ID].children);
//     console.log("target[item.ID].children3 ", target[item.ID].children["3"]);
//     console.log("target[item.ID].children[item.parentID] ", target[item.ID].children[item.parentID]);
//     console.log("--------------------------");


//   }

// });



console.log("--------------------------");
console.log("--------------------------");
console.log("--------------------------");
console.log("--------------------------");
console.log("--------------------------");
console.log("--------------------------");
console.log("--------------------------");
console.log("--------------------------");

console.log(JSON.stringify(list, null, 2, "  "));
