// Column Minimum 
// Description
// Given a matrix A of size n and m, you have to print the array of size m where each element represents the minimum of ith column of the matrix A.

// Input
// Input Format

// First-line contains 2 integers n and m representing the number of rows and columns respectively of 2D array arr.

// Following n lines contains m-integers.

// Constraints

// 1 <= n <= 100

// 1 <= m <= 100

// 1 <= arr[i][j] <= 10^4


// Output
// Print the required array.

// Sample Input 1 
// 3 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1
// 1 2 3
// Hint

// Minimum of 1st column = 1
// Minimum of 2nd column = 2
// Minimum of 3rd column = 3


function findminimumcolumn(n, m, arr){
    
    let result=[];
    
    for(var i = 0; i < m; i++)
    {
        let min = arr[0][i];
        
        for(var j=0; j<n; j++)
        {
            if(arr[j][i] < min)
            {
                min = arr[j][i];
            }
        }
        result.push(min);
    }
    
    result = result.join(" ");
    
    console.log(result);
}


function runProgram(input){
    
    input=input.trim().split("\n");
    
    let [n,m]=input[0].trim().split(" ").map(Number);  
    
    var arr =[];
    
    for(var i = 1; i<input.length; i++)
    {
        arr.push(input[i].trim().split(" ").map(Number));
    }
    findminimumcolumn(n, m, arr);   
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

