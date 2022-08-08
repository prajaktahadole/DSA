// Strings with Parenthesis

// Description
// Given a string containing three types of parenthesis : (), [], {}, write a program to check whether the string contains a valid sequence of parentheses.

// Input
// Input Format
// Input contains one line which is the string with parentheses whose validity you have to check

// Constraints
// length of string <= 1000

// Output
// Output Format
// Print "balanced" (without quotes) if it has a sequence of valid parentheses, otherwise print "unbalanced" (without quotes)

// Sample Input 1 
// (((((((((())))))))))
// Sample Output 1
// balanced

// Sample Input 2 
// [one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]
// Sample Output 2
// balanced


function Parenthesis(str){
    var obj={
        ")":"(",
        "}":"{",
        "]":"["
    };
    
    var stack=[];  
    var flag=0;
    var str2=[];
    
   for(let i=0; i<str.length; i++)
   {
       if(str[i]=="(" || str[i]=="{"|| str[i]=="["||str[i]==")" || str[i]=="}"|| str[i]=="]")
       {
           str2+=str[i];
       }
       else{
           continue;
       }
   }
    for(let i=0; i<str2.length; i++)
    {
        if(str2[i]=="(" || str2[i]=="{"|| str2[i]=="[")
        {
            stack.push(str2[i]);
        }
        
        else {
            if(obj[str2[i]]!=stack[stack.length-1])
            {
                return "unbalanced";
            }
            else{
                stack.pop();
            }
        }
    }
    if(stack.length ===0){
        flag=1;
    }else{
        flag=0;
    }
    if(flag==1){
        return "balanced";
    }
    else{
        return "unbalanced";
    }
}

function runProgram(input){
    var str=input;
    
   console.log(Parenthesis(str));
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