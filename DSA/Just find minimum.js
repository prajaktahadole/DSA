// Just find minimum 

// Description
// You are given N which is the number of different types of operation you need to perform on a stack. There are 3 different types of operations:
// PUSH V: Here V is an integer which you need to push in the stack
// POP: Here POP out the top element from stack. (In case stack is empty print "EMPTY")
// MIN: Print the minimum value present in the stack

// Input
// Input Format
// First line contains N which is the number of operations you need to perform on stack
// Next N line contains one of the 3 operations mentioned above
// Constraints
// N < 1000000
// V < 100

// Output
// Output Format
// The output consists of a line containing an integer with the smallest present value in the stack for queries of type "MIN" or "EMPTY" for "MIN" and "POP" operations when the stack is empty.

// Sample Input 1 
// 11
// PUSH 5
// PUSH 7
// PUSH 3
// PUSH 8
// PUSH 10
// MIN
// POP
// POP
// MIN
// POP
// MIN
// Sample Output 1
// 3
// 3
// 5


function Justfindminimum( x, y,stack){
    stack.push(+y);
}
function Justfindminimum1(x, stack){
    
    stack.map(Number);
    if(x == "POP" && stack.length !== 0)
    {
        stack.pop();
    }
     else if( x == "POP" &&  stack.length ===0 )
    {
        console.log("EMPTY");
    }
    else if( x == "MIN" &&  stack.length !==0 )
    {
        var min = (1/0);
        
        for( var i=0; i<stack.length; i++)
        {
            if( min > stack[i])
            {   
                min = stack[i];
            }
        }
        console.log(min);
    }
    
    else if( x == "MIN" && stack.length === 0)
    {
        console.log("EMPTY");
    }
}
 

function runProgram(input){
   input=input.trim().split("\n"); 
  
   var stack=[];
   for(var i=1;i<= +input[0];i++)
   {
      
       if(input[i].trim().split(" ").length == 2)
       {
           var [x, y]=input[i].trim().split(" ");
           
           Justfindminimum(x, y,stack);
       }
       else{
           
           Justfindminimum1(input[i].trim(),stack);
       }
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