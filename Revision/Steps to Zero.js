// Steps to Zero

// Description
// You are given an integer n and an integer k.

// In one step you can either of the one of the following moves:

// decrease n by 1;
// divide n by k if n is divisible by k.
// For example, if n=27 and k=3 you can do the following steps: 27→26→25→24→8→7→6→2→1→0.

// You are asked to calculate the minimum number of steps to reach 0 from n.

// Input
// Input Format
// The first line contains one integer t — the number of queries.
// The only line of each query contains two integers n and k .

// Constraints
// 1<=t<=10
// 2<=n,k<=10^9


// Output
// For each query print the minimum number of steps to reach 0 from n in single line.

// Sample Input 1 
// 1
// 59 3

// Sample Output 1
// 8
// 19
// Hint
// Steps for the first test case are: 59→58→57→19→18→6→2→1→0.

function  StepsZero(n,k){
    
   
    var count = 0;
    while(n !== 0){
        
        if( n%k === 0)
        {
            n = n/k;
           count++;
        }else
        {
            n = n-1;
            count++;
        }
        
    }
    console.log( count)
}


function runProgram(input){
    
    input = input.split('\n');
    for(var i = 1; i <= +input[0]; i++)
    {
        var x =input[i].split(" ").map(Number);
        var n = x[0];
        var k = x[1];
        StepsZero(n,k);
        // console.log(n,k);
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
