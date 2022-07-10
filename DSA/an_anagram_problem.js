function AlanChristopher(s){
  // console.log(s);
   var res = [];
   
   for(var i = 0; i < s.length; i++)
   {
       if(s[i] !== "#"){
           res.push(s[i]);
       }else{
           res.pop(s[i]);
       }
   }
   console.log(res.join(""));
}










function runProgram(input){
   input = input.split('\n');
   var n = input[0];
   
   for(var i = 1; i <= n; i++){
       var s = input[i];
       AlanChristopher(s);
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



/////****************************\\\\\


function runProgram(input) {
  var input = input.split("\n");
  var len = +input[0];
  var arr = [];
  for (let i = 1; i < input.length; i++) {
    arr.push(input[i]);
  }
  var obj = {};
  var ans = [];
  for (let i = 0; i < arr.length; i++) {
    temp = arr[i].split("").sort().join("");
    if (!obj[temp]) {
      ans.push(arr[i]);
      obj[temp] = temp;
    }
  }
  ans.sort();
  console.log(ans.length);
  console.log(ans.join("\n"));
}
if (process.env.USER === "prajaktahadole") {
  runProgram(`5\neodc\nodec\ncode\nbaca\naabc`);
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
