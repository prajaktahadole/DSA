// Two strings 

// Description
// Given two strings, determine if they share a common substring. A substring may be as small as one character.
// Input
// Input Format
// The first line contains a single integer t, the number of test cases.
// The following t pairs of lines are as follows:
// The first line contains string s1.
// The second line contains string s2.
// Constraints
// s1 and s2 consist of characters in the range ascii[a-z].
// 1 <= t <= 10
// 1 <= |s1|,|s2| <= 10^5

// Output
// Output Format
// For each pair of strings, print YES or NO.
// Sample Input 1 
// 2
// hello
// world
// hi
// world
// Sample Output 1
// YES
// NO
// Hint
// We have t = 2 pairs to check:
// First testcase
// s1="hello",s2="world". The substrings "o" and "l" are common to both strings.
// Second testcase
// s1="hi",s2="world". s1 and s2 share no common substrings.



function Twostrings(s1, s2){
    
    for(var i = 0; i < s1.length; i++ )
    {
          for(var j = 0; j < s2.length; j++)
          {
              if(s1[i] == s2[j]){
                  return "YES";
              }
          }
    }
    return "NO";
}







function runProgram(input){
    
    input= input.split("\n");
    line = 1;
    for(var i = 1; i <= +input[0]; i++){
        var s1 = input[line++];
        var s2 = input[line++];
        console.log(Twostrings(s1, s2));
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


