// Borderless 

// Description
// You are given a matrix A of size N X M. Find the sum of all the elements in the matrix which do not lie at the border.


// Input
// The first line of the input contains N and M, denoting the dimensions of the matrix.
// The next N lines contain M space separated integers each, denoting the elements of the matrix.

// Constraints
// 1 <= N, M <= 100
// 1 <= A[i][j] <= 100

// Output
// Print a single integer denoting the sum of all the elements in the matrix, which do not lie at the border.

// Sample Input 1 
// 4 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16
// Sample Output 1
// 34
// Hint
// In the sample test case, the elements which do not lie at the border, are {6,7,10,11}. Therefore, the sum of the elements are => 6 + 7 + 10 + 11 = 34, which is the required answer.



function sumWithoutBorders(N, M, matrix){
    
    var sum = 0;
    for(var i = 1; i< N-1; i++)
    {
         for(var j = 1; j< M-1; j++)
         {
            sum = sum + matrix[i][j]; 
         }
    }
    console.log(sum);
}




function runProgram(input){
    input = input.trim().split('\n');
 
    var line = 1;
   for(var i = 0; i < +input[0]; i++)
   {
       var [N, M] = input[line].trim().split(" ").map(Number)
        
       line++;
       var arr = [];
       for(var j = 0; j < row; j++)
       {
           arr.push(input[line].trim().split(" ").map(Number));
           line++;
       }
       sumWithoutBorders(N, M, matrix);
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
