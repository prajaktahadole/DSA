// Pasha and Shasha and valid anagram 

// Description
// Pasha and Shasha are fighting over two strings, whether they are anagrams or not, help them.

// Input
// 1<=T<=10
// next 2T lines consists of strings s1 and s2 for each test case
// 1<=S1<=100000
// 1<=S2<=100000


// Output
// output True if they are anagrams else False;

// Sample Input 1 
// 2
// abcd
// dcab
// aa
// aaa
// Sample Output 1
// True
// False


function validAnagram(str1, str2) {
        
    if(str1.length !== str2.length){
        console.log("False");
   
    }else{
         let s1 =  str1.split("").sort().join("");
   let t1 =  str2.split("").sort().join("");  
    
    if(s1 === t1){
         console.log("True");
    }
    else{
         console.log("False");
    }
    
   }
 
}




function runProgram(input){
    input = input.split('\n');
    var str1 = input[0].split(" ").join("");
    var str2 = input[1].split(" ").join("");
    console.log(validAnagram(str1, str2) );
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

