// Maximum Sum & Permutation

// Description
// Given an array of n elements. You can arrange the elements whichever way you want to. All you need to do is to find that permutation of integers of the array in which the sum of index multiplied by arr[index] is maximum.
// Basically maximum possible value of:
// Σ arr[i] * i


// Input
// Input Format:
// First-line contains n
// Second-line contains n space-separated integers

// Constraints:
// n <= 100000

// Output
// Output the maximum sum for the given expression

// Sample Input 1 
// 4
// 2 5 1 6
// Sample Output 1
// 30





  
function sort(n, arr){
    
    arr.sort(function(a, b){
        return (a-b);
    });
    Permutation(n, arr);
}



function Permutation(n, arr){
    
    // console.log(n, arr);
    var sum = 0;
    for(var i = 0; i < n; i++)
    {
        sum = sum +arr[i]*i;
    }
    console.log(sum);
}




function runProgram(input){
    
    input = input.split('\n');
    var n =+input[0];
    var arr = input[1].split( " ").map(Number);
    sort(n, arr);
   
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