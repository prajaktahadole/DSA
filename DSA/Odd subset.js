// Odd subset 
// Description

// Given an integer array, return the count of all the subsets of the array, where the sum of all the elements in the subset is odd.

// Input
// The first line of the input contains N, the size of the array.
// The next line contains N space separated integers denoting the elements of the array.

// Constraints
// 1 <= N <= 20
// -20 <= A[i] <= 20

// Output
// Print the count of all the subsets where the sum of all the elements in the subset is odd.

// Sample Input 1 
// 3
// 1 2 3
// Sample Output 1
// 4
// Sample Input 2 
// 2
// 2 4
// Sample Output 2
// 0
// Hint

// In the sample test case, the size of the array is 3, and the all the possible subsets of the array are,
// []
// [1]
// [2]
// [1, 2]
// [3]
// [1, 3]
// [2, 3]
// [1, 2, 3]
// The subsets with odd sum are [1],[3],[2,3], and [1,2], therefore, the count of subsets with odd sum are 4.


var count = 0; 
function subset(arr, temp, k) {
 
  for (let i = k; i < arr.length; i++)
  {
    temp.push(arr[i]);
    var oddSum = 0;
    
    for (let j = 0; j < temp.length; j++)
    {
      oddSum += temp[j];
    }
    if (oddSum % 2 !== 0) {
      count++;
    }
    subset(arr, temp, i + 1);
    temp.pop();
  }
}

function runProgram(input) {
  input = input.split("\n");
  var len = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  var temp = [];
  subset(arr, temp, 0);
  console.log(count);
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

