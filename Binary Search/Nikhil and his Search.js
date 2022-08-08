// Nikhil and his Search 
// Description
// Nikhil and his friend Sachin are on a quest to find the answer to Life.
// In order to complete it, they need to answer Q queries on an array A having N integers. The queries can be of the following two types:
// 0 x: Find the number of numbers in A which are not less than x.
// 1 x: Find the number of numbers in A which are greater than x.
// Help them complete the quest.


// Input
// Input Format
// The first line consists of a single integer denoting N.
// The second line consists of N space separated integers denoting the array A.
// The third line consists of a single integer denoting Q.
// Each of the following Q lines consists of a query of one of the given two types.

// Constraints
// 1<= N <= 100000
// 1<=Q<=300000
// 1<= elements of array, x < 1000000000

// Output
// For each query print the required answer in a new line.

// Sample Input 1 
// 4
// 1 2 3 4
// 3
// 0 5
// 1 3
// 0 3
// Sample Output 1

// 0
// 1
// 2


function upperBound(arr, target) {
    var low = 0;
    var high = arr.length - 1;
    var ans = -1;
    while (low <= high) {
      let mid = Math.floor(low + (high - low) / 2);
      if (arr[mid] <= target) {
        low = mid + 1;
      } else {
        ans = mid;
        high = mid - 1;
      }
    }
    return ans;
  }
  
  function lowerBound(arr, target) {
    var low = 0;
    var high = arr.length - 1;
    var ans = -1;
    while (low <= high) {
      let mid = Math.floor(low + (high - low) / 2);
      if (arr[mid] >= target) {
        ans = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return ans;
  }
  
  
  
  function runProgram(input){
    input = input.split("\n");
    var len = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    arr.sort((a, b) => {
      return a - b;
    });
    var q = +input[2];
    var line = 3;
    for (let k = 0; k < q; k++) {
      var [type, target] = input[line++].trim().split(" ").map(Number);
      if (type === 0) {
        // ">"
        var index = lowerBound(arr, target);
        if (index < 0 || index >= arr.length) {
          console.log(0);
        } else {
          console.log(arr.length - index);
        }
      } else {
        // ">="
        var index = upperBound(arr, target);
        if (index < 0 || index >= arr.length) {
          console.log(0);
        } else {
          console.log(arr.length - index);
        }
      }
    }
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
  