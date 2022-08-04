// Again a classical problem 
// Description

// A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].
// Two brackets are considered to be a matched pair if the opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().
// A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets enclose a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].
// By this logic, we say a sequence of brackets is balanced if the following conditions are met:
// It contains no unmatched brackets.
// The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
// Given a string, you have to comment if it is balanced or not


// Input
// Input Format
// First line of input contains t which is the number of test cases present in the question
// Each test case has a string

// Constraints
// t < 100
// length of string < 100

// Output
// Print "balanced" if the string is balanced, otherwise print "not balanced" in case the string is not balanced

// Sample Input 1 
// 3
// {([])}
// ()
// ([]
// Sample Output 1
// balanced
// balanced
// not balanced


function classicalproblem(arr){
    
    var obj = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    
    var stack =[]; var flag=0;
    for(var i =0;i<arr.length;i++)
    {
        if(arr[i]=="(" || arr[i]=="{" || arr[i]=="[")  {
            stack.push(arr[i]);
        }
        else {
            if(obj[arr[i]]!=stack[stack.length-1]) {
                return "not balanced";
            }
            else {
                stack.pop();
            }
        }
    }
    if(stack.length==0) {
        flag=1;
    }
    else {
    flag=0;
    }
    if(flag==1){
       return "balanced";
    }else{
       return "not balanced";
    }
  }
  
   

  
  function runProgram(input){
      
      var input = input.trim().split('\n');
        var tc = +input[0];
        var line =1;
        for(var i = 0; i<tc;i++)
      {
          var arr = input[line];
          line++
    
      console.log(classicalproblem(arr))
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