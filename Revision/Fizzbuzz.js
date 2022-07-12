// Fizzz buzzz 
// Description

// You are given a number stored in a variable with the namenum

// For all numbers in the range[1,num], including num
// 1. If the number is divisible by 3 and 5 both, print FizzBuzz
// 2. Else If the number is divisible by 3, print "Fizz", without quotes
// 3. Else If the number is divisible by 5, print "Buzz", without quotes
// 4. Else, print the number as it is 


// Input
// The first line containsT, the number of test cases.
// The first line of each test case contains the value stored in the variablenum


// Output
// Print the required output, according to the conditions shown in the problem statement


// Sample Input 1 
// 2
// 1
// 3
// Sample Output 1
// 1
// 1
// 2
// Fizz
// Hint

// In the sample test case, the value stored inT = 2. Therefore, there are two test cases for which we need to solve the given problem
// In the first test case, the value stored innum = 1. Therefore, all the values in the range from[1,1], are printed. Since, no value is either divisibly by 3 or 5 or both, hence the number is printed as it is
// Hence the output becomes
// 1
// In the second test case, the value stored innum = 3. Therefore, all the values in the range from[1,3]are printed. Since, the number3is divisible by3, therefore, instead of writing 3, we writeFizz
// Hence, the output becomes
// 1
// 2
// Fizz



function Fizzzbuzzz(n){
    
    for(var i = 1; i <=n; i++)
    {
        if(i%5 === 0 && i%3 === 0)
        {
            console.log("FizzBuzz");
        }
         else if(i%3 === 0)
        {
            console.log("Fizz");
        }
         else if(i%5 ===0 )
        {
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
    
}





function runProgram(input){
    
    input = input.split("\n").map(Number);
    
    for(var i = 1; i <= input[0]; i++)
    {
       var n = input[i];
        Fizzzbuzzz(n);
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
