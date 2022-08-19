// Motu to Potlu house

// Description
// Motu decided to visit his friend Potlu. It turned out that the Motu's house is located at point 0 and his friend's house is located at point x (x > 0) of the coordinate line. In one step the Motu can move 1, 2, 3, 4 or 5 positions forward.
// Determine, what is the minimum number of steps he need to make in order to get to his friend's house.

// Input
// Input Format :
// First and the only line contain the integer n which denotes the position of his friend's house.

// Constraints :
// 1 <= n <= 10^6

// Output
// Output contains a single line denoting the minimum number of steps.

// Sample Input 1 
// 26
// Sample Output 1
// 6
// Hint
// Output Explanation :
// For n = 26, Motu can move as
// 5 --> 5 --> 5 --> 5 --> 5 --> 1
// Hence he needed 6 steps to reach at position 26.


function motupatlu(n){
    
    var res = 0;
    
    var temp = Math.floor(n/5);
    res = res + temp;
    var rem = n%5;
    
    if(rem !== 0){
        res = res + 1;
    }
    console.log(res);
  
    
}



function runProgram(input){
    n = +input;
   motupatlu(n);
    
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