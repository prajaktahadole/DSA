// Signal X 

// Description
// There is a war going on and Ankush is stuck in the enemy base, and he is moving continuously from one place to another to be safe.
// He wants to send his location to his country, so that when they reach they can track him.
// He sends matrixes in emails so that it is not suspicious, but some how his enemies found out about these matrices.
// So now he sends multiple matrices, but only few of them are correct, rest to distract the enemies.
// In the correct ones he makes an X in the matrix as follows:
// All the elements in the diagonals of the matrix are non-zero.
// All other elements are 0.
// You are given multiple matrices and you have to output which are his actual location and which are to distract them.

// Input
// Input Format
// The input consists of multiple matrices, that he sends. The first line contains an integer t - the number of matrices.
// The first line of description of each matrix contains an integer n - the size of the matrix.
// The next n lines contain the description of the matrix.
// The ith (1 ≤ i ≤ n) line contains n space separated integers, the jth (1 ≤ j ≤ n) of which represent mat[i][j].

// Constraints
// 1 ≤ t ≤ 100
// 3 ≤ n ≤ 100
// 1 ≤ mat[i] ≤ 10^6

// Output
// Output Format
// For each matrix print True if the matrix represents an X, False otherwise.
// Sample Input 1 
// 1
// 4
// 2 0 0 1
// 0 2 1 0
// 0 1 9 0
// 6 0 0 3
// Sample Output 1
// True
// Hint
// Capture.JPG
// Refer to the diagram above.
// An X-Matrix should have the green elements (diagonals) be non-zero and the red elements be 0.
// Thus, grid is an X-Matrix.


function SignalX(arr,n){
    
    var nonzero = 0;
    var zero = 0;
    
    for(var i = 0, j=n-1; i < n , j >= 0; i++, j--)
    {
        if(arr[i][i] === 0){
            nonzero++;
        }
        if(arr[i][j] === 0)
        {
            nonzero++;
        }
        // console.log(i, j);
       
    }
   
    
    
    for(let u = 0; u < n; u++)
    {
        for(let v = 0; v < n; v++)
        {
            if(arr[u][v] === 0)
            {
                zero++;
            }
        }
    }
    
    var block = n*n;
     var total;
    if(n%2 === 0){
        total = n*2;
    }else{
        total = n*2-1;
    }
    
  
    var non_block = block-total;
    
    if(non_block== zero && nonzero === 0 )
    {
        console.log("True");
    }else{
        console.log("False");
    }
     
    
}


function runProgram(input){
    
    input=input.trim().split("\n");
     
     var line = 1;
     for(let i=1; i<= +input[0]; i++)
     {
         var n = input[line++];
         let arr=[];
         for(var j = 0; j < n; j++)
         {
            arr.push(input[line++].trim().split(" ").map(Number)); 
         }
       SignalX(arr,n);
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
