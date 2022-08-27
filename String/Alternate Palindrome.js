// Alternate Palindrome

// Description
// Given a string s of length n, find out if it's possible to make it palindrome by rearranging their characters.
// Print "Yes" if it is possible else "No" (without quotes).
// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 1000) — the number of test cases. Then t test cases follow.
// The first line of each test case contains a single integer n (1 ≤ n ≤ 1000) — the length of the string
// The second line of each test case contains the string s.

// Output
// For each test case, print the answer: Yes or No.
// Sample Input 1 
// 3
// 1
// a
// 3
// aab
// 4
// abbb
// Sample Output 1
// Yes
// Yes
// No



function AlternatePalindrome(n, str){
    
    var obj = {};
    for(var i = 0; i < n; i++)
    {
        if(obj[str[i]] === undefined)
        {
            obj[str[i]] = 1;
        }else
        {
            obj[str[i]] = obj[str[i]] + 1;
        }
    }
    
    var count = 0;
    var char = 0;
    
    for(var x in obj){
        char++;
        if(obj[x]%2 === 0)
        {
            count++;
        }
    }
   if(count == char || count == char-1){
       console.log("Yes");
   }else{
       console.log("No");
   }
}



function runProgram(input){
    input = input.split('\n');
    var line = 1;
    for(var i = 1; i <= +input[0]; i++)
    {
        var n = +input[line++];
        var str = input[line++];
        AlternatePalindrome(n, str);
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
