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