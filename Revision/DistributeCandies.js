// Distribute Candies 

// Descriptio
// There are n students standing in a line. Each student is assigned a rating value.
// You are responsible to distribute the candies to these students subjected to the following
// requirements:

// -> Each student must have at least one candy because every student deserves it.

// -> Students with a strictly higher rating get more candies than their neighbors.

// What is the minimum number of candies you need to distribute to the student?


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.
// The first line of each test case contains a single integer n (1 ≤ n ≤ 100000) — The size of the array.
// The second line of each test case contains n integers (1 ≤ Ai ≤ 100000). The ratings of the student.


// Output
// For each test case, print the answer: The minimum number of candies.
// Sample Input 1 
// 2
// 3 
// 1 0 2
// 3
// 1 2 2
// Sample Output 1
// 5
// 4

function DistributeCandies(n, arr) {
    let sum = 0;
    let ans = new Array(n);
    if (n == 1)
    {
        return 1;
    }
    for(let i = 0; i < n; i++)
        ans[i] = 1;
  
    for(let i = 0; i < n - 1; i++)
    {
   
        if (arr[i + 1] > arr[i])
        {
            ans[i + 1] = ans[i] + 1;
        }
    }
  
    for(let i = n - 2; i >= 0; i--)
    {
        if (arr[i] > arr[i + 1] &&
            ans[i] <= ans[i + 1])
        {
            ans[i] = ans[i + 1] + 1;
        }

        sum += ans[i];
    }
    sum += ans[n - 1];
  
    return sum;
}



    
function runProgram(input){
    input = input.split("\n");
    var line = 1;
    for(var i = 1; i <= +input[0]; i++){
        var n = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(DistributeCandies(n, arr));
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

