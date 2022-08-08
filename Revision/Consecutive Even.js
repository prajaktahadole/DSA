// Consecutive Even 
// Description
// Given an array A with n integers, find out whether if there exist three consecutive elements in the given array which are even.

// Print "Yes" if exists, else "No".

// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 100) — the number of test cases. Then t test cases follow.
// The first line of each test case contains a single integer n (3 ≤ n ≤ 1000) — the number of elements in the array A.
// The second line of each test case contains n integers (1 ≤ Ai ≤1000).

// Output
// For each test case, print the answer.
// Sample Input 1 
// 2
// 3
// 1 2 3
// 5
// 1 2 4 6 8
// Sample Output 1
// No
// Yes


function consequtiveEvens(n,A){
    var count = 0;
    for(var i = 1; i < n-1; i++){
        if(A[i]%2 === 0 && A[i-1]%2 === 0 && A[i+1]%2 === 0 ){
           count++;
        }
    }
    if(count>= 1){
        console.log("Yes");
    }else{
         console.log("No");
    }
 }
 