// Search in sorted and rotated array 

// Description
// Given a sorted(increasing order) array of length n and is rotated by some value beforehand. Find the index of the target element  K in the rotated array in O(logn) time. If not found print -1.
// In a sorted & rotated array,  we rotate an ascending order sorted array at some pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2.
// Please note that the linear search approach with the time complexity of O(n) can easily be applied. But you are expected to solve it in O(log n) time complexity
// Note: Array contains all distinct elements.


// Input
// Input Format
// First line consists of n and k separated by space.
// Second line consists of n integers separated by spaces

// Constraints
// 1 <= n <= 50
// k <= 50

// Output
// Print index of the target element
// Sample Input 1 
// 5 1
// 3 4 5 1 2
// Sample Output 1
// 3
// Sample Input 2 
// 6 6
// 3 4 7 9 1 2
// Sample Output 2
// -1


function search(arr, low, high, target) {
 
    if (low > high) {
        return -1;
    }
    let mid = low + Math.floor((high - low) / 2);
  
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[low] <= arr[mid]) {
        
      if (target >= arr[low] && target <= arr[mid])
      {
        return search(arr, low, mid - 1, target);
      }
      return search(arr, mid + 1, high, target);
    }
    
    
    if (target >= arr[mid] && target <= arr[high])
    {
      return search(arr, mid + 1, high, target);
    }
    return search(arr, low, mid - 1, target);
    
    
    
  }
  
  function runProgram(input) {
    input = input.trim().split("\n");
    
    var [len, target] = input[0].trim().split(" ").map(Number);
    
    var arr = input[1].trim().split(" ").map(Number);
    
    console.log(search(arr, 0, arr.length - 1, target));
  }
  if (process.env.USER === "") {
    runProgram(`5 1\n3 4 5 1 2`);
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
  
