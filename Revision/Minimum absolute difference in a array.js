// Minimum absolute difference in a array Ended
// Description

// The absolute difference is the positive difference between two valuesaandb, is written|a-b|or|b-a|and they are equal. Ifa=2andb=3,|2-3|=|3-2|=1.

// Given an array of integers, find the minimum absolute difference between any two elements in the array.


// Input
// Input Format
// The first line contains a single integern, the size ofarr.

// The second line containsnspace-separated integers,arr[i].

// Constraints
// 2 <= n <= 10^5

// -10^9 <= arr[i] <= 10^9


// Output
// Output Format
// Print the minimum absolute difference found


// Sample Input 1 

// 3
// 3 -7 0
// Sample Output 1

// 3
// Hint

// The first line of input is the number of array elements. The array, [3,-7,0] There are three pairs to test: (3,-7), (-7,0), and (3,0). The absolute differences are: 10, 7 and 3 respectively

// Remember that the order of values in the subtraction does not influence the result. The smallest of these absolute differences is 3.



function runProgram(input){
    
    input = input.split('\n');
    var n = +input[0];
    var arr = input[1].split(" " ).map(Number);
     arr.sort();


  let min = 10000000; 
  for(let i = 1; i < n; i += 1) {
    const p = arr[i - 1];
    const c = arr[i];
    const diff = Math.abs(p - c);
    min = Math.min(min, diff);
  }
  console.log(min)
    
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

