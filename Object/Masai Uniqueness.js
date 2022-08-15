// Masai Uniqueness 

// Description
// You are given a string S. Your task is to write a program that comments if it has all unique character or not (no repeated character).
// If it has just unique character, output "Unique"
// Else in all other cases, output "No"

// Input
// Input Format

// First and the only line contains string S
// Constraints
// Length of S < 1000

// Output
// Output one string based on string
// Sample Input 1 
// masai
// Sample Output 1
// No


function  Uniqueness(str, n){
  
    let obj = {};
    
    for(let i = 0; i < n; i++){
        if(obj[str[i]] === undefined){
            obj[str[i]] = 1;
        }else{
            obj[str[i]] = obj[str[i]]+ 1; 
        }
    }
   
  
    var count = 0;
    for(var x in obj){
        
      if(obj[x] > 1){
          count++;
      }
    }
    if(count > 0){
          console.log("No");
      }else{
           console.log("Unique");
      }
      
              
  
  }
  
  
  
  
  function runProgram(input){
      var str = input;
      var n = str.length;
      Uniqueness(str, n);
      
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



  

