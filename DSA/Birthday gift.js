// Birthday gift

// Description
// Happy Birthday!!
// Today is your birthday. You have 2 bestfriends and both of them are planning to gift you a string for your birthday.
// Now, you get angry if people give you similar birthday gifts. You consider two strings similar if the character at all indexes are same irrespective of their case (i.e lowercase or uppercase are considered similar)
// Compare the two string and tell if you will get angry or not.
// Note: It is guaranteed that the size of the strings are same

// Input
// Input Format
// The input contains multiple testcases. The first line contains an integer t - the number of testcases.
// The following 2*t lines contain the description to the testcases.
// Each of the two lines contain a string, the gift received from your friend.

// Constraints
// 1 ≤ t ≤ 10^3
// 1 ≤ size of string ≤ 10^3

// It consists of uppercase and lowercase english alphabets
// Output
// Output Format
// For each testcase print Angry if you will get angry looking at the gifts, else print Not angry.

// Sample Input 1 
// 2
// aaaa
// aaaA
// tradffA
// TradffD
// Sample Output 1
// Angry
// Not angry
// Hint
// In the first testcase, characters at all indexes in the both the strings are similar.
// In the second testcase, the last character in the strings is not similar.




function runProgram(input){
    
    input= input.split("\n");
    line = 1;
    for(var i = 1; i <= +input[0]; i++){
        var s1 = input[line++].toLowerCase();
        var s2 = input[line++].toLowerCase();
    
          if(s1 === s2){
              console.log("Angry");
          }else{
              console.log("Not angry");
          }
        
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