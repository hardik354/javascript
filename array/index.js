let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// creation by array constructor
let brr = new Array("Hardik" , 12 , true);
// console.log(brr);

// both have type of OBJECT


// BUILT IN METHODS
/* 
Push ==> method adds an element to the end of an array
Pop ==> method removes the last element from an array
Shift ==> method removes the first element from an array
unshift ==> method adds an element to the beginning of an array
slice ==>  give new part from the existing array
splice ==> method changes(insert,remove,replace) the contents of an array by removing or replacing existing elements

*/ 

// brr.push("Last Element");
// brr.pop();
// brr.unshift('hey');
// brr.unshift('7');
// brr.unshift('true');

// console.log(brr.slice(1, 3)); // from index 1 to 3 (last index not included)

// brr.splice(2, 0, 'new'); // insert new element at index 2
// brr.splice(2, 1, 'updated'); // replace element at index 2
// brr.splice(2, 2); // remove 2 elements from index 2


// console.log(brr);


// SOME MORE METHODS 😊😊

// ===> Map() method creates a new array with the results of calling a provided function on every element in the calling array.
// let numbers = [1, 2, 3, 4, 5];
// let ansArr = numbers.map((val) => {
//     return val*val;
// });
// console.log(ansArr);


// ===> Filter() method creates a new array with all elements that pass the test implemented by the provided function.
// let numbers = [1, 2, 3, 4, 5];
// let filteredArr = numbers.filter((val) => {
//     return val%2 === 0;
// });
// console.log(filteredArr);


// ===> Reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value.
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);
// console.log(sum);


// ===> Sort() method sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16
// let arr1 = [12, 2, 33, 489, 54];
// arr1.sort((a, b) => a - b);
//  console.log(arr1);
// The comparison function (a, b) => a - b ensures that .sort() treats the array elements as numbers:
// If a - b is negative, a comes before b.
// If a - b is positive, b comes before a.
// If a - b is 0, their order remains the same.


// ===> Find() method returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise, it returns undefined.
//  let arr1 = [12, 24, 33, 489, 54];
//  let found = arr1.find((val) => {
//      return val%3 === 0;
//  });
//  console.log(found);


// ===> Reverse() method reverses the order of the elements of an array in place and returns the array.
// let arr1 = [12, 24, 33, 489, 54];
// arr1.reverse();
// console.log(arr1);


// DISCUSS ABOUT LOOPS😂😂😂😂

// 1) FOREACH
// let arr1 = [12, 24, 33, 489, 54];
// arr1.forEach((val, index) => {
//     console.log(`Index: ${index}, Value: ${val}`);
// });

