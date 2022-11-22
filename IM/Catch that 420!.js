// Catch that 420!

// Description

// You are given an integer N. Your task is to find if the string 420 is present in it or not.
// Print "Caught" (without quotes) if 420 is present in it.
// Otherwise "Escaped" (without quotes) if 420 is not present in it.

// Input
// Input Format
// You are provided an integer N.

// Constraints
// N<1000000

// Output
// Output Format
// Output an string based on the conditions mentioned above.

// Sample Input 1 
// 97420
// Sample Output 1
// Caught
// Hint
// Sample 1 Explanation
// 97420 contains 420.
// Hence output is "Caught"



function Catch420(N){
    
    var c= 0;
    var e = 0;
    
    for(var i = 0; i < N.length-2; i++)
    {
        if(N[i] === "4")
        {
            if((N[i+1] === "2")&& (N[i+2] === "0"))
            {
                c =c + 1;
            }
        }else
            {
               e =e +1;
            }
    }
      if(c > 0)
      {
           console.log( "Caught");
      }
      else
      {
          console.log( "Escaped" );
      }
  }
  
  
  function runProgram(input){
      var N = input;
      Catch420(N);
      
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
