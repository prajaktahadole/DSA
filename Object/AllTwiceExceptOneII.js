// All Twice Except One II 
// Description
// You are given a numberN, and an array such that the array contains all the numbers from 1 to N including N twice, except for one, which is present only once
// You have to find the number which is present only once, in the array


// Input
// The first line of the input containsT, the number of test cases
// The first line of each test case, containsN, the value as explained in the problem statement
// The next line contains2*N - 1, the number of elements in the array

// Constraints
// 1 <= T <= 10
// 1 <= N <= 2 * 10^5
// 1 <= arr[i] <= N

// Output
// For each test case, print the number which is present only once, on a new line
// Sample Input 1 

// 1
// 5
// 1 2 1 3 4 4 5 2 3
// Sample Output 1

// 5
// Hint
// In the sample test case, all the numbers except for 5 are present twice. Therefore, the output is5

function AllTwiceExceptOne(n, arr){
    
    var obj = {};
    for (var i = 0; i < 2*n-1; i++){
        
        if(obj[arr[i]] === undefined)
        {
            obj[arr[i]] =1;
        }else{
            obj[arr[i]]= obj[arr[i]]+1;
        }
    }
  
    for(var key in obj){
        if(obj[key] === 1){
            return key;
        }
    }
}

function runProgram(input){
    input = input.split('\n');
    var line = 1;
    for(var i = 1; i <= +input[0]; i++)
    {
        var n = +input[line++];
        var arr = input[line++].split(" ").map(Number);
       console.log( AllTwiceExceptOne(n, arr));
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
