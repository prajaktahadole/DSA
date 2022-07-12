// Anagram Detector! 
// Description
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. For example, the word anagram can be rearranged into nag a ram.
// Given 2 phrases, write a program that detects if both are anagrams of each other.
// If both are anagrams, print "True"
// Else print "False"
// Input
// Input Format :
// First line of input contains first phrase
// Second line of input contains second phrase
// Constraints :
// Length of each phrase < 1000
// Output
// Output a string based on conditions mentioned above
// Sample Input 1 
// anagram
// nag a ram
// Sample Output 1
// True


function isAnagram(s1, s2) {
            
    if(s1.length !== s2.length){
        return "False";
     }
     s1 =  s1.split("").sort().join("");
     s2 =  s2.split("").sort().join("");  
       
       if(s1 === s2){
           return "True";
       }else{
           return "False";
       }   
   }
   

   function runProgram(input){
       input = input.split('\n');
       var s1 = input[0].split(" ").join("");
       var s2 = input[1].split(" ").join("");
       console.log(isAnagram(s1, s2) );
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
   