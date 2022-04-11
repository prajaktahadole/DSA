function Numberofways(n, sum){
    
    if(sum == n){
        return 1;
    }
    if(sum > n){
        return 0;
    }
    return Numberofways(n, sum+1) + Numberofways(n, sum+2) + Numberofways(n, sum+3);
    
}


function runProgram(input){
    var n = +input;
    var sum = 0;
    console.log(Numberofways(n, sum));
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