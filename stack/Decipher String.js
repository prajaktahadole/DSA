// Decipher String 

// Description
// You are given a ciphered string, you have to decipher the string.
// For example, if the given string is "a2b1c2", then the deciphered string will be "aabcc".
// Note: The string contains only lower-case letters and numbers.

// Input
// The first line of the input contains T, the number of test cases.
// The first line of each test case contains N, the length of the string.
// The next line contains the string, for which the decipher string is to be generated.

// Constraints
// 1 <= T <= 10
// 1 <= N <= 200

// Output
// For each test case, print the deciphered string for the given string, on a new line.

// Sample Input 1 
// 2
// 6
// a2b1c2
// 6
// a2z1a2
// Sample Output 1
// aabcc
// aazaa
// Hint
// For the first sample test case, the deciphered string will be aabcc.
// For the second sample test case, the deciphered string will be aazaa.


function Decipher(str, n){
    
   
   let stack=[]; 
   let i=0;
   let lowercase="abcdefghijklmnopqrstuvwxyz";

   for(let i=0; i<n; i++)
   {
       for(let j=0; j<lowercase.length; j++)
       {
           if(str[i]==lowercase[j])
           {
               continue;
           }
           else
           {
               let num= +str[i];

               for(let k=0; k<num; k++)
               {
                   stack.push(str[i-1]);
               }
               break;
           }
       }
   }
   console.log(stack.join(""));
  
    
}



function runProgram(input){
    
    input = input.split("\n");
    var line = 1;
    
    for(var i = 1; i <= +input[0]; i++){
         var n = +input[line];
         line++;
         var str = input[line];
         line++;
      Decipher(str, n);
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
