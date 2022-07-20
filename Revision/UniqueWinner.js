// Unique Winner 

// Description
// Alex and his friends have gathered for a birthday party and have decided to play a lottery game with his friends.
// There exist n participants seated in a row indexed from 1 to n. There are n tokens numbered from 1 to n kept in a pot. Each participant draws a token, note the number Ai and keep the token back into the pot.
// The winner of the game is the participant whose number is unique and is minimum among all unique values.
// Print the index of the participant who won the game or -1 if there is no winner.


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.
// The first line of the test case contains one integer n (1 ≤ n ≤ 100000).
// The second line of the test case contains n integers (1 ≤ Ai ≤ n). The numbers noted by each participant.


// Output
// For each test case, print the index of the winner.
// Sample Input 1 
// 4
// 2
// 1 1
// 3
// 2 1 3
// 4
// 2 2 2 3
// 1
// 1
// Sample Output 1
// -1
// 2
// 4
// 1

function UniqueWinner(n, arr){
    
    let obj = {};
 
     for(let i = 0; i < n; i++){
     if(obj[arr[i]] === undefined){
         obj[arr[i]] = 1;
     }else{
         obj[arr[i]] = obj[arr[i]]+ 1; 
     }
   }

//console.log(obj);
  var unique = [];
  for(var x in obj){
      if(obj[x] === 1){
          unique.push(x);
      }
  }
  
  unique = unique.map(Number)
  var min = 10000000;
   for(var i = 0; i < unique.length; i++)
       {
           if(min > unique[i] && unique.length !== 0){
                min = unique[i]; 
       }
   }
          
   
   for(var k = 0; k < arr.length; k++ )
   {
       if(arr[k] === min){
           return k+1;
       }
   }
   return -1;
  

}


function runProgram(input){
   input = input.split("\n");
   var line = 1;
   for(var i = 1; i <= +input[0]; i++){
       var n = +input[line++];
       var arr = input[line++].trim().split(" ").map(Number);
    console.log( UniqueWinner(n, arr));
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
