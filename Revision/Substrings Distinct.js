function  DistinctSubstrings(n, str){
    // console.log(n, str);
   
    var obj ={};
     
     for(var i = 0;i<n;i++){    
         var res ="";
         for(var j = i;j<n;j++){ 
             res = res + str[j];
             if(obj[res] === undefined){
                 obj[res] = 1;
             }
         }
     }
     // console.log(obj)
     
     var num = Object.values(obj);
     // console.log(num)
     console.log(num.length);
   
 }
 
 
 
 
 function runProgram(input){
     input = input.split('\n');
     
     var line = 1;
     for(var i = 0; i < +input[0]; i++){
         var n = +input[line];
         line++;
         var str = input[line];
         line++;
         DistinctSubstrings(n, str);
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