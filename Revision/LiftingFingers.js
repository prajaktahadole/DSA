// Lifting Fingers Ended
// Description

// Given a string s, find the number of lifts performed by fingers while switching keys.
// Here, we have a keyboard that has keys starting from 'a' to 'z' in a single row. Now, we have to type the given string using the above keyboard.
// In our problem, we lift our fingers whenever there is a change of characters while typing.
// Consider, while typing the same character, no fingers are lifted.

// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.
// The first line of each test case contains the string s (1 ≤ |s| ≤ 1000) — the length of the string.

// Output
// For each test case, print the answer: The number of lifts.


// Sample Input 1 
// 2
// aaaaa
// abbbaaz
// Sample Output 1
// 1
// 4
// Hint
// Sample Input 1 :

// aaaaa
// Initially, count = 1
// a -> a -> a -> a -> a

// No Character changes while typing.
// Thus, The output is 1 (count = 1).

// Sample Input 2 :
// abbbaaz
// Initially,count = 1

// a -> b :count = 2
// b -> a :count = 3
// a -> z :count = 4
// Thus, the output is 4 (count = 4).




function  LiftingFingers(s){
    var count = 1;
   for(var i = 0; i < s.length-1; i++)
   {
       if(s[i] !== s[i+1])
       {
           count++;
       }
   }
   console.log(count);
 
}


function runProgram(input){
   input = input.split('\n');
   for(var i = 0; i < +input[0]; i++)
   {
       var s = input[i];
       LiftingFingers(s);
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
