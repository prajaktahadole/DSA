// Check Skewness Ended
// Description
// Given an integer n, find out whether an integer is odd, even, or not skewed.
// An integer is oddly skewed if it has more number of odd divisors than even divisors and vice versa for evenly skewed.
// If the number of odd and even divisors are equal, then it is not skewed.
// Refer to the sample testcase for I/O.
// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.
// The first line of each test case contains a single integer n (1 ≤ n ≤ 100000000) — the number of shops in the neighborhood.
// Output
// For each test case, print the answer: "Odd Skewed" or "Even Skewed" or "Not Skewed".
// Sample Input 1 
// 3
// 4
// 6
// 11
// Sample Output 1
// Even Skewed
// Not Skewed
// Odd Skewed


function  CheckSkewness(n){
      
    var countodd = 0;
    var counteven = 0;
    for(var i = 1; i <= n; i++ )
    {
        if(n % i === 0){
            if( i%2 === 0 )
            {
              counteven++;   
            }else if(i%2 !== 0)
            {
            countodd++;
            }
        }
    }
   //console.log(counteven , countodd )
   if(counteven >countodd){
         console.log("Even Skewed");
   }
   else if(countodd > counteven){
       console.log("Odd Skewed");
   }
   else{
        console.log("Not Skewed");
   }
   
 
}


function runProgram(input){
 input = input.split('\n').map(Number);
 for(var i = 1;  i <= input[0]; i++){
     var n = input[i];
     CheckSkewness(n);
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