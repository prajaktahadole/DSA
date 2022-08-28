// Count Subarrays Under Condition 

// Description
// Given an arrayarrofNpositive integers, count the number of subarrays whose sum is perfectly divisible byK.
// Input
// First line: denotes the length of the array (N)
// Second line: denotes N space-separated positive integers denoting the elements of array (arr)
// Third line: denotes an integer K
// Output
// Print the count of total number of such subarrays with sum equal to K

// Sample Input 1 
// 4
// 1 2 5 3
// 3
// Sample Output 1
// 2
// Sample Input 2 
// 6
// 21 3 3 4 5 7
// 7
// Sample Output 2
// 3
// Hint

// In sample input 1,K = 3and there are 2 subarrays whose sum are divisible by 3,[1,2]and[3]. Hence, the output is2
// In sample input 2,K = 7and there are 3 subarrays whose sum is divisible by 7,[21],[3,4],[7].Hence, the output is3



function countSubArray(n,arr,tar){
  

    let count = 0;
    for(let i = 0; i<n; i++){
        for(let j=i;  j<n;  j++)
        {
            let res=[];
             for(var l=i;  l<=j;  l++)
             {
                res.push(arr[l]);
             }

            let sum=0;
            for(let i=0;  i<res.length;  i++){
                sum+=res[i];
            }
            if(sum % tar ===0){
                count++;
            }
        }
    }
    console.log(count);
    
}

function runProgram(input){
    input = input.trim().split("\n");
    let line = 1;
    let n = +input[0];

        let arr = input[1].trim().split(" ").map(Number);
        let tar = +input[2];
        countSubArray(n,arr,tar)
    
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read)
});


