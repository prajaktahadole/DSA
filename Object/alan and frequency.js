function alanFrequency(N, string) {
      
  string=string.split("").sort().join("");  
  var res = {};
  
  for(var i= 0; i <N; i++){
      var temp = string[i];
      if(res[temp] === undefined){
          res[temp] = 1;
      }else{
          res[temp] = res[temp] +1;
      }
  }
  
  for(var x in  res){
      console.log(x +"-" + res[x]);
  }
 
}






/************OR***************/




function runProgram(input) {
  input = input.trim().split("\n");
  var len = +input[0];
  var str = input[1];
  var obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]] = obj[str[i]] + 1;
    }
  }
  var arr = Object.keys(obj).map((key) => [key, obj[key]]);
  arr.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
  });
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i][0]}-${arr[i][1]}`);
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