function MasaiPalindromicSubstring(S, n){
    //console.log(str);

   var max = -1;
   for(var i = 0; i < n; i++)
   {
       for(var j = i ; j < n; j++)
       {
          var str = "";
          for(var k = i; k <= j; k++)
           {
              str = str + S[k];
           }   
         IsPalindrom(str);
         
         if( IsPalindrom(str) === true){
             
            var length= str.length;
            if(length>max)
            {
               max=length;
            }
         }
       }
   }
   
   console.log(max);
}


function  IsPalindrom(str){
     i = 0;
     j = str.length - 1;
     
     while(i < j){
         if(str[i] == str[j]){
            i++;
            j--;
         }
         else{
             return false
         }
     }
     return true;
   
    
}




function runProgram(input){
     S = input;
     n = input.length;
    MasaiPalindromicSubstring(S, n);
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
