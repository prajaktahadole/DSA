// Substring under condition 

// Description
// Given a string S, you need to find the count of all contiguous substrings starting and ending with same character.

// Input
// Input Format :
// First and the only line contains a string S

// Constraints:
// Length of S <= 1000


// Output
// Output the count

// Sample Input 1 
// abcab
// Sample Output 1
// 7










function subStrUnderCond(s){
    var n = s.length-1;
    var count = 0;
    for (var i = 0; i <=n; i++)
     {
      for (var j = i; j <=n; j++)
        {
          var bag = "";
          
          for (var k = i; k <=j; k++)
          {
            bag = bag + s[k];
          }
       //   console.log(bag)
          var n2 = bag.length -1;
        
           if(bag [0] == bag[n2])
          {
          count++;
          }
        }
    }
    console.log(count);
}

function runProgram(input){
    var s = input;
    subStrUnderCond(s);
    
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
