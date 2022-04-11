function sum(n, x, y){
    var sum = 0;
    for(var i = 0; i < n; i++){
        sum = sum + x[i] + y[i];
    }
    console.log(sum);
}






function runProgram(input){
    
    input = input.split('\n');
    var tc = input[0];
    var line = 1;
    
    for(var i = 0; i <tc; i++)
    {
        var n = +input[line];
        line++;
        var x = input[line].split(" ").map(Number);
        line++;
         var y = input[line].split(" ").map(Number);
        line++;
        
        sum(n, x, y);
       // console.log(n, x, y);
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