// Missing Integer 

// Description
// You are given an array of N-1 integers and integers are in the range of 1 to N. There are no duplicates in the array. One of the integers is missing in the array. Find the missing integer

// Input
// Input Format
// The first and only line contains N-1 integers

// Constraints
// N<100

// Output
// Print the one number belonging from 1 to N which is not present in the array

// Sample Input 1 
// 4 5 1 3
// Sample Output 1
// 2




function MissingInteger(input){
    
    var sum = 0;
    var max = 0;
    for (i = 0; i < input.length; i++)
    {
      if (input[i]>max)
      {
        max = input[i]; 
      }  
      sum = sum + input[i];
    }

   var sumofn = (max * (max+1))/2;
   
   //console.log(sum , max);
   
    var diff = sumofn - sum;
    if (diff === 0) 
    {
       console.log(max);
    }
    else
    {
      console.log(diff); 
    }
 
}

 


function runProgram(input){
    
    input = input.split(" ").map(Number);
    
    MissingInteger(input);
    
    
    
    
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



