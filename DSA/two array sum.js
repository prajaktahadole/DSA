// Two Array One Sum Ended
// Description

// You are given two arraysAandB, both of the same sizeN
// You have to find the sum of all elements in both the arrayAandB


// Input
// The first line of the input containsT, the number of test cases.
// The first line of the test case, containsNthe size of the two arrays.
// The next line containsNspace separated integers denoting the elements of the arrayA
// The last line of each test case containsNspace separated integers, denoting the elements of the arrayB

// 1 <=T<= 10
// 1 <=N<= 100
// 1 <=A[i], B[i]<= 100


// Output
// For each test case, print a single integer denoting the sum of all the elements in both the arrays, on a new line.








function sum(n, x, y){
    var sum = 0;
    for(var i = 0; i < n; i++){
        sum = sum + x[i] + y[i];
    }
    console.log(sum);
}






function runProgram(input){
    
    input = input.split('\n');
    var tc = input[0];
    var line = 1;
    
    for(var i = 0; i <tc; i++)
    {
        var n = +input[line];
        line++;
        var x = input[line].split(" ").map(Number);
        line++;
         var y = input[line].split(" ").map(Number);
        line++;
        
        sum(n, x, y);
       // console.log(n, x, y);
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