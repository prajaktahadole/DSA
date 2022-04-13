// Better average Ended
// Description

// You are given scores of last N matches of two different batsmen in the form of arrays. 
// Your task is to print the ceil value of better average among the two in case that value is even. 
// If that value is not even, print -1.


// Input
// Input Format

// First line contains the number of matches N.

// Second line contains N space separated integers describing scores of the first batsman.

// Third line contains N space separated integers describing scores of the second batsman.

// Constraints
// N<100


// Output
// Print an integer which can either be ceil of the better average of the two batsmen 
// or -1 depending upon the ceil of better average.





function match(n, x, y){

    var sumx = 0;
    var sumy = 0;
    for(var i = 0; i < n; i++){
        sumx = sumx+ x[i];
        sumy = sumy+ y[i];
    }
    
    if(sumx > sumy){
        let avg = Math.ceil(sumx/n);
        if(avg %2 === 0){
              console.log(avg);
        }else{
              console.log(-1);
        }
      
    }
    else if(sumy > sumx){
        
       let avg = Math.ceil(sumy/n);
        if(avg %2 === 0)
        {
             console.log(avg);
        }else
        {
              console.log(-1);
        }
        
    }
    else{
        let avg = Math.ceil(sumy/n);
        if(avg %2 === 0)
        {
             console.log(avg);
        }else
        {
              console.log(-1);
        }
    }
}



function runProgram(input){
    input = input.split("\n");
    var n = +input[0];
    var x = input[1].split(" ").map(Number);
    var y = input[2].split(" ").map(Number);
    
    match(n, x, y);
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