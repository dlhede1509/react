//this looks for common items in two arrays
//  const arr1 = [645,876,22,45,62,90,96,45,3,4,6,61,1,7,16,64,97,23,43,53,64,1,1,2,3,5,8,13,21];
//  const arr2 = [11,3,3,3,4,5,6,7,4,3,6,7,66,55,87,98,34,54,566,765,34,5,6,7,5,4,4,6,7,7,8,6,5,]; 
//  var arr3 = arr1.concat(arr2)

  
//   function sum (...args) { 
//     var total;
//     total = args.reduce((acc, elem) => acc + elem, 0);
//     console.log(total);
//   }
 
// sum(645,876,22,45,62,90,96,45,3,4,6,61,1,7,16,64,97,23,43,53,64,1,1,2,3,5,8,13,21);
// console.log(sum())

function isNumber(a) {
  return typeof a === "number" ? "Thats a number" : "Thats not a number"  
};
  
isNumber(3)
console.log(isNumber(4));
console.log(isNumber('a'));



var vowelsCount = 0;
var vowels = ["a", "e", "i", "o", "u"]
var strings = "Im gonna make it after all"

for (let i = 0; i < str.length; i++) {
  if (strings[i] === vowels) {
    vowelsCount += 1;
  } else {
    ++i;
  }
  return vowelsCount;
};
