// Keep Distincts 
// Description

// Given a string S. Your task is to remove all duplicates characters from the string S

// NOTE:

// 1.) Order of characters in output string should be same as given in input string.

// 2.) String S contains only lowercase characters ['a'-'z'].


// Input
// Input Format:

// Input contain a single string S.

// Constraints:

// 1<=|Length of String|<=100000


// Output
// Print the string S with no any duplicate characters.


// Sample Input 1 

// iloveprogramming
// Sample Output 1

// iloveprgamn







function KeepDistincts(str){
    
    // using object ====>
  var unique = {};
  var result = "";
  
  for(var i = 0; i < str.length; i++){
      var char = str[i];
      
      if (unique[char] === undefined){
         unique[char] = 1;
      }
      else{
         unique[char] =  unique[char] +1;
      }
  }
  for(X in unique){
      result = result + X;
  }
  
  console.log(result)
  
  
  
  
  
  
  
  
  // using array ====>
  
  
  // var unique = "";
  // for(var i = 0; i < str.length; i++)
  // {
  //     var count = 0;
  //     for(var j = 0; j < unique.length; j++)
  //     {
  //         if(str[i] == unique[j])
  //         {
  //             count++;
  //         }
  //     }
  //     if(count === 0)
  //     {
  //         unique = unique + str[i];
  //     }
  // }
  //   console.log(unique);
  
  
  
}





function runProgram(input){
  var str = input;
  KeepDistincts(str);
  
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