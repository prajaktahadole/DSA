// Easy but recursion 

// Description
// This is an easy question. You just have to find the sum of an array given the elements of the array.
// The only constraint is that you have to write a recursive code

// Input
// Input Format :
// There are several test cases within a test case.
// First line contains t which is the number of test cases
// First line of each test case contains n which is the number of integers
// Second line of each test case contains n space separated integers

// Constraints :
// n <= 100000
// arr[i] <= 10


// Output
// Output t lines where each line contains sum of all the elements in that test case

// Sample Input 1 
// 3
// 5
// 6 3 8 2 -4
// 5
// -10 -7 10 2 -2
// 5
// -4 -5 6 -3 9

// Sample Output 1
// 15
// -7
// 3


function sum(N, arr){
    
   
    if (N <= 0){
        return 0;
    }
     return ( arr[N-1] + sum(N-1, arr));
      
   
}

function runProgram(input){
    
    input = input.split('\n');
    var tc = input[0];
    
    var line = 1;
    
    for(var i = 0; i < tc; i++){
    
        var N = +input[line];
        line++;
         var arr = input[line].split(" ").map(Number);
         line++;
         
        var j = 0;
        var ans = sum(N, arr);
       console.log(ans);
   
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