function hasTargetSum(array, target) {

  if (array.length < 2) return false 

  for (let i = 0; i < array.length - 1; i++){
    for (let j =  i + 1; j < array.length; j++){
      if (array[i] + array[j] === target){
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here

  O(n^2) because it's a nested loop
*/

/* 
  if length < 2
    return false  

  for (i = 0, i < length - 2, i ++)
    
    for (j = 0, j < length -1, j++)
      if element[i] + element[j] === target
        return true 

  return false
*/

/*
  this is a nested loop because you are keeping track of the first element, and the pair is the index of the first element + 1 
  x, x+1
  so 
  index[x] + index[x+1], index[0] + index [x+1 + 1]

*/



/*

when two elements of an array is added up, they equal the target value provided
x, x+1
x, x+2
x, x.length -1
x+1, x+2
x+1, x+3
x+1, x+4
x+1,
...
x.length -1 -1,

this feels like a nested loop


*/

// // You can run `node index.js` to view these console logs
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
