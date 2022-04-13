// Follow The Knight Ended
// Description

// You are very good at playing chess since childhood and you knew the rules very much. You have a  10 X 10 chessboard and you want to explore all the possible squares on the board that the knight can be at in exactly N moves.It is placed at (i,j) coordinate initially. For a 10X10 chessboard (1,1) will be the top left corner and (10,10) will be the bottom right corner.

// You can refer the following diagram, the knight can move to any of the squares marked as X in 1 move.

// Input
// Input Format

// Input will consist of three space seperated integers i,j and N

// Constraints

// N < 10

// Output
// Print a single integer denoting the number of blocks on the chessboard that the knight can be at in exactly N moves.





function followTheKnight(board, row, col,k){
    if (row < 0 || row > 9 || col < 0 || col > 9){  
           return;                             
       }                                       
       if (k === 0){                        
           board[row][col] = 1;                
           return ;                        
       }
       followTheKnight(board,row-1,col+2,k-1);     
       followTheKnight(board,row-1,col-2,k-1);     
       followTheKnight(board,row+1,col+2,k-1);     
       followTheKnight(board,row+1,col-2,k-1);     
       followTheKnight(board,row+2,col+1,k-1);     
       followTheKnight(board,row+2,col-1,k-1); 
       followTheKnight(board,row-2,col+1,k-1);     
       followTheKnight(board,row-2,col-1,k-1);  
}




let board=[
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0]
         ];
function runProgram(input){
    let [row, col, k]=input.trim().split(" ").map(Number);
     followTheKnight(board,row-1,col-1,k);
       let count=0;
   for(let i=0; i<10; i++){
       for(let j=0; j<10; j++){
           if(board[i][j]==1){
               count++;
           }
       }
   }
   console.log(count);
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
