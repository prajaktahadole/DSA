// Make Leaderboard
// Description

// You are given name and marks of N different students in a hackerrank contest. Your task is to write a program that makes leaderboard of the students under following conditions:
// - If two students get same marks they get same rank
// - The student placed next to the same marks students will get the rank skipping the intermediate ranks.
// Refer to the sample test case for better understanding
// Note : You cannot use built-in sort function. Using that can lead to disqualification. Write your own sorting algorithm


// Input
// Input Format :
// First line of input contains N
// Next N line contains name and marks respectively of N different students (where name and marks is separated by a space)

// Constraints :
// N < 100

// Output
// Output N names with their rank. Follow these rules for generating the list:
// 1. The students having more mark gets better rank
// 2. If students have similar mark, their rank will be same(In case of similar marks, the person whose name comes first in alphabetical order comes first in order. However their rank will be same)
// 3. The student placed next to the same marks students will get the rank skipping the intermediate ranks.

// Sample Input 1 
// 6
// rancho 45
// chatur 32
// raju 30
// farhan 28
// virus 32
// joy 45
// Sample Output 1
// 1 joy
// 1 rancho
// 3 chatur
// 3 virus
// 5 raju
// 6 farhan

function makeLeaderboard(arr1,arr2,n) {
    for(let i=0; i<n; i++){
        for(let j=0; j<n-i-1; j++){
            if(toArrange(arr1[j],arr1[j+1])){
               swapTheElement(arr1,arr2,j,j+1);
            }
        }
    }
    
    for(let i=0; i<n; i++){
        for(let j=0; j<n-i-1; j++){
            if(arr2[j]<arr2[j+1]){
                swapTheElement(arr1,arr2,j,j+1)
            }
        }
    }
    let curr=1;
    for(let i=0; i<n; i++){
        if(arr2[i]===arr2[i-1]){
            console.log(curr,arr1[i])
        }else {
            console.log(i+1,arr1[i]);
            curr=i+1;
        }
    }
}
 
 
 function toArrange(w1,w2){
     let min=Math.min(w1.length,w2.length);
     for(let i=0; i<min; i++){
         if(w1[i]!=w2[i]){
             if(w1[i].charAt()>w2[i].charAt()){
                 return true;
             }else{
                 return false;
             }
         }
     }
     return false;
     
 }
 function swapTheElement(arr1,arr2,j,k){
     let temp=0;
     temp=arr1[j];
     arr1[j]=arr1[k];
     arr1[k]=temp;
     
     let temp2=0;
     temp2=arr2[j];
     arr2[j]=arr2[k];
     arr2[k]=temp2;
 }
 
 







function runProgram(input){
     input=input.trim().split("\n");
     let n=+input[0];
     let line=1;
     let arr1=[];
     let arr2=[];
     for(let i=0; i<n; i++){
         let m=input[line].trim().split(" ");
         arr1.push(m[0].trim());
         arr2.push(+m[1].trim());
         line++;
     }
         makeLeaderboard(arr1,arr2,n)
     
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