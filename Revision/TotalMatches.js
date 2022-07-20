// Total Matches 

// Description
// Given an integer n, the number of teams participating in a knockout tournament.
// The rules for the tournament are -
// -> If the number of teams is even in a particular round, then each team gets paired with another team. A total of n/2 matches are played in that round and the n/2 winners advance to the next round.
// -> Else, one random team gets a bye for the next round and n-1 teams get paired and n-1/2 matches are played. Here n-1/2 winners advance to the next round.
// There will a winner of this knockout tournament. Find the total number of matches played in the tournament until the winner is decided.

// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.
// The first line of each test case contains a single integer n (1 ≤ n ≤ 1000).

// Output
// For each test case, print the answer: The number of matches.
// Sample Input 1 
// 2
// 2
// 3
// Sample Output 1
// 1
// 2


function  TotalMatches(n){
    console.log(n-1);
}



function runProgram(input){
    input = input.split("\n");
    
    for(var i = 1; i<= +input[0]; i++)
    {
        var n = +input[i];
         TotalMatches(n);
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
