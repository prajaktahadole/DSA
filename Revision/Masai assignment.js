// Masai assignment

// Description
// Today at Masai school you received an assignment and you were supposed to complete it by yesterday but you forgot about it.
// Now to do it quickly you have decided to write a code for it.
// You are given a string consisting of both uppercase and lowercase characters and you are asked to make the following changes:
// deletes all the vowels,
// inserts a character "." before each consonant,
// replaces all uppercase consonants with corresponding lowercase ones.


// Input
// Input Format
// The first line of the input contains an integer t — the number of test cases.
// The next t lines contain the description of the t testcases.
// The first and the only line of each testcase contains the string.

// Constraints
// 1 ≤ t ≤ 10^4
// 1 ≤ |s| ≤ 10^3

// Output
// Output Format
// For each testcase output the new string


// Sample Input 1 
// 2
// tour
// aBAcAba
// Sample Output 1
// .t.r
// .b.c.b


function  Masaiassignment(s){
   
   
    var res = [];
    for(let i = 0; i < s.length; i++)
    {
        if(s[i] !== "a"&&  s[i] !== "e"&& s[i] !== "i"&& s[i] !== "o"&& s[i] !== "u"){
            res.push(".");
            res.push(s[i]);
        }
    }
  res= res.join("");
   
   console.log(res); 
    
}


function runProgram(input){
    input = input.split('\n');
    
    for(var i =1; i <= +input[0]; i++){
        var s = input[i].toLowerCase();
        Masaiassignment(s);
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

