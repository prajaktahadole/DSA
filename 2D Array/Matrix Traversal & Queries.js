// Matrix Traversal & Queries 

// Description
// You are given a matrix of size n x m , and two types of queries are to be performed on this matrix. The two types of queries are
// q = 1, for this type of query, the matrix is to be traversed
// q = 2, for this type of query, the matrix is to be traversed 

// Input
// The first line of input contains T, the number of test case. The first line of each test case contains n, m and q, as declared in the problem statement.
// Next n lines contain space separated integers, denoting the values of the matrix.

// Constraints
// 1 <= T <= 10
// 1 <= N,M <= 500
// 1 <= A[i][j] <= 1000

// Output
// Print n x m space separated integers, denoting the elements of the matrix, on a new line.

// Sample Input 1 
// 2
// 3 3 1
// 1 2 3
// 4 5 6
// 7 8 9
// 3 3 2
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1
// 1 2 3 6 5 4 7 8 9 
// 3 2 1 4 5 6 9 8 7 

function masaiTraversalAndQueries(N, M, q, arr){
   
    var res = "";
    
    if(q == 1)
    {
        for(var i = 0; i < N; i++)
        {
            if(i % 2 === 0)
            {
                for(let j = 0; j < M; j++ )
                {
                   res = res + arr[i][j] + " "; 
                }
            }else{
                 for(let j = M-1; j >= 0; j-- )
                {
                   res = res + arr[i][j] + " " ;
                }
            }
        }console.log(res);
        
        
        
    }
    else if(q == 2)
    {
        for(let i = 0; i < N; i++)
        {
            if(i % 2 === 0)
            {
               for(let j = M-1; j >= 0; j-- )
                {
                   res = res + arr[i][j] + " " ;
                }
            }
            else
            {
                 for(let j = 0; j < M; j++ )
                {
                   res = res + arr[i][j] + " "; 
                }
                 
            }
        }console.log(res);
         
    }
  
 }





function runProgram(input){
      input = input.trim().split('\n');
     var q = +input[0];
  
  var line = 1;

     for(var i = 0; i < q; i++)
     {
         var [N, M] = input[line].trim().split(" ").map(Number)
          
         line++;
         var arr = [];
         for(var j = 0; j < row; j++)
         {
             arr.push(input[line].trim().split(" ").map(Number));
             line++;
         }
         masaiTraversalAndQueries(N, M, q, arr);
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
 