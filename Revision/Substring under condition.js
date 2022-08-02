function subStrUnderCond(s){
    var n = s.length-1;
    var count = 0;
    for (var i = 0; i <=n; i++)
     {
      for (var j = i; j <=n; j++)
        {
          var bag = "";
          
          for (var k = i; k <=j; k++)
          {
            bag = bag + s[k];
          }
       //   console.log(bag)
          var n2 = bag.length -1;
        
           if(bag [0] == bag[n2])
          {
          count++;
          }
        }
    }
    console.log(count);
}

function runProgram(input){
    var s = input;
    subStrUnderCond(s);
    
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
