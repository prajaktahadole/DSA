// Answer Query 

// Description
// Given an array of N space-separated integers and q queries containing l and r representing 
// indexes of the array and and integers u and v. For each query you have to print the number of elements in array in range l to r inclusive which are greater than or equal to a and less than or equal to b.

// Input
// Constraints
// 1 <= N <= 10^5
// 1 <= q <= 10^5
// 1 <= a[i] <= 10^5
// 1 <= l <= r <= n
// 1 <= u <= v <= 10^5

// Output
// For each query print the answer in a new line.

// Sample Input 1 
// 5
// 1 2 3 4 5
// 3
// 1 3 2 4
// 2 4 1 2
// 3 5 1 2
// Sample Output 1
// 2
// 1
// 0
// Hint
// For the first query
// from 1 to 3 index -> 1, 2, 3.  Elements in the range 2 to 4 are only 2 and 3 therefore answer is 2.
// For the second query,
// from 2 to 4 index -> 2, 3, 4.  Elements in the range 1 to 2 are only 2 therefore answer is 1.
// For the third query,
// from 3 to 5 index -> 3, 4, 5.  No, any elements are in the range 1 to 2 therefore answer is 2.




function AnswerQuery(arr,s,neww){
   
    for(var i=0; i<s; i++)
    {
        var count=0;
        for(let j = neww[i][0]-1;  j<=neww[i][1]-1;  j++)
        {
            if(arr[j] >= neww[i][2]  && arr[j] <= neww[i][3])
            {
                count++;
            }
        }
        console.log(count);
    }
}


function runProgram(input) {
    
  input=input.trim().split("\n");
  let n=+input[0];
  
      let arr = input[1].trim().split(" ").map(Number);
      let s = +input[2];
      let line = 3;
      let neww = [];
      for(let i=0; i<s; i++){
          let [x,y,i,r]=input[line].trim().split(" ").map(Number);
          neww.push([x,y,i,r]);
          line++;
      }
      AnswerQuery(arr,s,neww);
 
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





