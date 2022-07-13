// Rotate the array returns back 

// Description
// You are given an array of n elements and an integer k, you need to rotate the array by k units.

// Input
// First-line contains t, which is the number of test cases
// For each test cases, first-line has n & k - the number of elements in the array and the number of times the array has to be rotated
// The second line of each test case contains n numbers which represent the elements of the array

// Constraints
// 1<=T<=20
// 1<=N<=50000, 0<=K<=1000000000
// 1 <= Ai <= 1000000

// Output
// out put N elements, elements of the array , rotated by K units

// Sample Input 1 
// 3
// 2 1
// 1 2
// 2 2
// 1 2
// 3 1
// 1 2 3
// Sample Output 1
// 2 1
// 1 2
// 3 1 2

function  Rotate(n, k , arr){
    // console.log(n, k, arr);
    var arr1 = "";
    var arr2 = "";
    k = k%n;
  
    for(var i = 0; i < n; i++ )
    {
        if(i < n-k){
           arr1= arr1 + arr[i] + " "; 
        }
        else if (i >= n-k){
            arr2= arr2 + arr[i] + " ";
        }
    }
   
    var result = arr2 + arr1;
    console.log(result);  
}

function runProgram(input){
    input = input.split('\n');
    var line  = 1;
    
    for(var i = 1; i <= +input[0]; i++){
        var x = input[line++].split(" ").map(Number);
        var n = x[0];
        var k = x[1];
        var arr = input[line++].split(" ").map(Number);
        Rotate(n, k , arr);
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
