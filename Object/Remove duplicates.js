// Remove duplicates 

// Description
// Given an array of n integers, the array is sorted. You have to remove the duplicates, print only unique elements, do it in place. i.e O(1) space

// Input
// 1<=T<=10
// 1<=N<=100000
// 1<=Ai<=100000

// Output
// output a single integer x, i.e the number of unique elements in the array and in the next line print the x unique elements.
// NOTE: Do it inplace

// Sample Input 1 
// 2
// 3
// 1 1 2
// 4
// 1 1 3 3
// Sample Output 1
// 2
// 1 2
// 2
// 1 3



function Removeduplicates(n, arr){
  
    let obj = {};
    
    for(let i = 0; i < n; i++){
        if(obj[arr[i]] === undefined){
            obj[arr[i]] = 1;
        }else{
            obj[arr[i]] = obj[arr[i]]+ 1; 
        }
    }
   
    let bag = "";
    let len = 0;
    
    for(var x in obj){
        bag += x + " ";
        len++;
    }
      
      console.log(len);
      console.log(bag);
            
  }
  
  
  function runProgram(input){
      input = input.split("\n");
      var line = 1;
      for(var i = 1; i <= +input[0]; i++){
          var n = +input[line];
          line++;
          var arr = input[line].split(" ").map(Number);
          line++;
        Removeduplicates(n, arr);
          
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