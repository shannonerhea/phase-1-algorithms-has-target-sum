// __function hasTargetSum(arr, target) {
//  for (let i = 0; i < arr.length; i++) {
//   let ele = arr[i];
//   if (target === ele) {
//     return i;
//   };
//  };
//  return -1
// }

const hasTargetSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    let num1 = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
        let num2 = arr[j];

        if (num1 + num2 === target) {
            return true;
        }
    }
}

return false;
};
/* 
  I didnt learn about Big O, 
  Il come back and answer this
   when we go over it. Well thats 
   not true i know a lil about big o 
   but i dont know any other way 
   to solve this at the momnet
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
