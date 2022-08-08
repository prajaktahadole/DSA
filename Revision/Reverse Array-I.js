// Reverse Array (Part - I) 

// Description
// You are given an array, and an integer K
// You have to reverse the array from0 to K, keeping the rest of the elements in the same order
// You must not use any extra space or create a new array for the same
// Ensure you are not using any extra array to achieve this, and not directly printing it


// Input
// The first line of the input contains the value ofNandK
// The next line containsNspace separated values denoting the elements of the array

// Constraints
// 1 <= N <= 100
// 1 <= arr[i] <= 100

// Output
// Reverse the array from0 to K, and then print the array on a single line

// Sample Input 1 
// 6 3
// 1 2 3 4 5 6
// Sample Output 1
// 4 3 2 1 5 6



function  ReverseI(n, k, arr){

    // console.log(n, k, arr);
    var j = 0;
    while(j <= k)
    {
        swap(arr, k, j);
        
        k--;
        j++;
        
    }
    console.log(arr.join(" "));
   
}

function swap(arr, k, j){
    temp = arr[k];
    arr[k] = arr[j];
    arr[j]= temp;
}


function runProgram(input){
    input = input.split('\n');
    var [n, k] = input[0].split(" ").map(Number);
    var arr = input[1].split(" ").map(Number);
    Reverse(n, k, arr);
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
