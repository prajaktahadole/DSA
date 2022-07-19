// Repeated and Missing 

// Description
// Given an array of size n. Array elements are in the range from 1 to n. In the given array, one number from set {1, 2, …n} is missing and one number occurs twice in the array. Find these two numbers.
// Print the missing one first and then the repeated one with a space character in between them.
// Expected Auxillary Space Complexity - O(1)

// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.
// The first line of each test case contains a single integer n (2 ≤ n ≤ 100000).
// The second line of the test case contains n integers (1 ≤ Ai ≤ n).

// Output
// For each test case, print the answer.

// Sample Input 1 
// 3
// 5
// 1 2 3 3 4
// 2
// 1 1
// 3
// 1 2 2
// Sample Output 1
// 5 3
// 2 1
// 3 2



function  RepeatedandMissing(n, arr){
  
    var obj = {};   
    for(var i = 0; i < n; i++)
    {
        if(obj[arr[i]] === undefined)
        {
           obj[arr[i]] =1;
        }
        else{
             obj[arr[i]] = obj[arr[i]] + 1;
        }
    }
      
      for(var x in obj){
        if(obj[x]> 1){
            var rep = x;
        }
      }
            
      var total = (n*(n+1)/2);    
      var sum = 0;
      for(let i = 0; i < n; i++){
          sum = sum + arr[i];
      }
    // console.log("total", total);
      //console.log("sum", sum-rep);
      sum = sum - rep;
      var missing = total-sum;
      
      console.log(missing , rep);
  }
  
  
  
  function runProgram(input){
      input = input.split('\n');
      var line = 1;
      
      for(var i = 0; i < +input[0]; i++){
          var n = +input[line];
          line++;
          var arr = input[line].split(" ").map(Number);
          line++;
          RepeatedandMissing(n, arr);
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