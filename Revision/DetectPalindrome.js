// Detect Palindrome 
// Description
// Given an integer, print "Yes" (without quotes) if that integer is aPalindrome, else print "No" (without quotes)
// You must write a recursive function to achieve this
// You must not use the reverse() function. Using that would lead to disqualification
// Input
// Input Format
// You are provided with one integer.
// Constraints
// The provided integer is always lesser than 1000000
// Output
// Print Yes or No depending upon the integer.
// Sample Input 1 
// 1221
// Sample Output 1
// Yes
// Hint
// Sample 1 Explanation
// Reading 1221 from either side is same, so Yes, it is a palindrome.


function DetectPalindrome(n){
    
    // var temp = "";
    // for(var i = n.length-1; i >=0 ; i--)
    // {
    //   temp = temp + n[i] ;
    // }
    
    // if(temp == n){
    //     console.log("Yes");
    // }else{
    //     console.log("No");
    // }


    ///*************OR***********/////////


    var i = 0; 
    var j = n.length -1;
    
    while(i <= j){
        if(n[j] == n[i]){
            j--; 
            i++;
        }else{
            return "No";
        }
        return "Yes"
    }


}

function runProgram(input){
    
    console.log(DetectPalindrome(input));
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

