// Happy number
// Description

// Write an algorithm to determine if a numbernis happy.

// Ahappy numberis a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.

// Repeat the process until the number equals 1 (where it will stay), or itloops endlesslyin a cycle which does not include 1.

// Those numbers for which this processends in 1are happy.


// Input
// Input Format
// The first line contains an integer t - the number of testcases.

// The next t lines contain the description of the t testcases.

// The first and only line of each testcase contains an integer n.

// Constraints
// 1 <= t <= 30

// 1 <= n <= 2^31-1


// Output
// Output Format
// For each testcase output Yes if the number is happy, else No on a new line.


// Sample Input 1 

// 2
// 19
// 2
// Sample Output 1

// Yes 
// No
// Hint

// First testcase
// 1^2 + 9^2 = 82

// 8^2 + 2^2 = 68

// 6^2 + 8^2 = 100

// 1^2 + 0^2 + 0^2 = 1


function find(n){
    
    var sum = 0;
    while(n>0){
      let x =n%10;
      n=Math.floor(n/10);
      sum += x*x;
        
    }
    
    if(sum==1){
      return console.log("Yes");
    }
    else if(sum<=4 && sum>1){
       return console.log("No");
    }
    
    return find(sum);
    
}


function runProgram(input){
    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;
    for(let i=0;i<tc;i++){
        let n = +input[line++];
        
        find(n);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});


