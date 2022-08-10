// Rotate Elements

// Description
// Given a n by n matrix. You have to rotate the elements of each ring of the matrix in the clockwise direction one place.

// Input
// Input Format
// First line will contain a single number n
// Next n lines will contain the matrix

// Constraints
// n<=1000
// Elements of the matrix <=10000

// Output
// You have to display the rotated matrix

// Sample Input 1 
// 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

// Sample Output 1
// 1 1 2 3
// 1 2 2 4
// 1 3 3 4
// 2 3 4 4
// Hint

// Consider this matrix in the form of two rings and rotate the ring by one place in the clockwise direction


function RotateElements(arr,n){
    let top=0; 
    let bottom=n-1; 
    let left=0; 
    let right=n-1;
    
    let bag=[];
    
    while( top<bottom && left<right)
    {
        let prev= arr[top+1][left];
         
        for(let i=left; i<=right; i++)
        {
            let temp= arr[top][i];
            arr[top][i]=prev;
            prev=temp;
        }
        top++;
        
        for(let i=top; i<=bottom; i++)
        {
            temp= arr[i][right];
            arr[i][right]=prev;
            prev=temp;
            
        }
        right--;
        
        for(let i=right; i>=left; i--)
        {
          temp= arr[bottom][i];
          arr[bottom][i]=prev;
          prev=temp;
        }
        bottom--;
        
        for(let i=bottom; i>=top; i--)
        {
            temp= arr[i][left];
            arr[i][left]=prev;
            prev=temp;
           
        }
        left++;
     
    }  
    // for printing the final output;
   for(let i=0; i<arr.length; i++){
       console.log(arr[i].join(" "));
   }
 }
 









function runProgram(input){
    
     input=input.trim().split("\n");
     let n=+input[0];
     let mat=[];
     for(let i=1; i<=n; i++){
         mat.push(input[i].trim().split(" ").map(Number));
     }
     RotateElements(mat,n);
     
     
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
