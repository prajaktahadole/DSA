// Is Even Sum Possible? 

// Description
// Given an array a which contains n integers in it. Find out if there exists a subset of the array such that the sum of its elements is even.


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.
// The first line of each test case contains a single integer n (1 ≤ n ≤ 100000) — the length of the array a.
// The second line contains n integers a1,a2,…,an (1 ≤ ai ≤ 10000), elements of the array a.

// Output
// For each test case, print the answer: "Yes" if possible or else "No" if not possible (without quotes).

// Sample Input 1 
// 2
// 1
// 5
// 4
// 1 2 3 4
// Sample Output 1
// No
// Yes




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
    if (oddSum % 2 === 0) {
      return "Yes";
    }
    subset(arr, temp, i + 1);
    temp.pop();
  }
  return "No";
}

function runProgram(input) {
  input = input.split("\n");
  var line = 1;
  
  for(var i = 0; i < +input[0]; i++)
  {
  var len = +input[line++];
  var arr = input[line++].trim().split(" ").map(Number);
  var temp = [];
   console.log(subset(arr, temp, 0));
  //console.log(count); 
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







