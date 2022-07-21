// National Award Ceremony 

// Description
// It's December time and it's the time to celebrate all the state winners of various sports and award them with their medals. The medal awarded are either Gold, Silver, or Bronze.
// We have an array A of n winners where winners are randomly lined up starting from position 0 to position n-1. The gold players have their value assigned as 0, silver as 1, and bronze as 2.
// Here all same medals winners are identical.
// Since the medals will be distributed uniformly i.e, first all golds then silver, and then subsequently bronze winners, you need to come up with an algorithm to arrange them in the uniform order so that the ceremony can start quickly as you are the event manager.
// Since the government computers are not well equipped with the latest technologies, there are some space and time constraints under which you need to execute this task. (Also the sort function doesn't work since it takes O(nlogn)),
// The required time complexity is linear and the required space complexity is constant per testcase.


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.
// The first line of each test case contains a single integer n (1 ≤ n ≤ 100000).
// The second line of the test case contains n integers (0 ≤ Ai ≤ 2).

// Output
// For each test case, print the answer.

// Sample Input 1 
// 3
// 1
// 2
// 3
// 2 0 1
// 4
// 2 0 2 1
// Sample Output 1
// 2
// 0 1 2
// 0 1 2 2



function MergeSort(arr,low,high){
    if(low==high){
        return;
    }
    let mid= Math.floor((low+high)/2);
     MergeSort(arr,low,mid);
    MergeSort(arr,mid+1,high);
    
    mergeElement(arr,low,high,mid);
}



function   mergeElement(arr,low,high,mid){
   let arr1=[]; let arr2=[];
   for(let i=low; i<=mid; i++){
       arr1.push(arr[i]);
       
   }
   for(let i=mid+1; i<=high; i++){
       arr2.push(arr[i]);
   }
   let left=0; let right=0; let index=low;
   
   while(left<arr1.length && right<arr2.length){
       if(arr1[left]<= arr2[right]){
           arr[index]=arr1[left];
           left++;
       }
       else {
           arr[index]=arr2[right];
           right++;
       }
       index++;
   }
   while(left<arr1.length){
       arr[index]=arr1[left];
       left++;
       index++;
   }
   while(left<arr2.length){
       arr[index]=arr2[left];
      right++;
       index++;
   }
}


function runProgram(input){
   input = input.split("\n");
   
   var line = 1;
   for(var i = 0; i < +input[0]; i++)
   {
       var n = +input[line];
       line++;
       var arr = input[line].split(" ").map(Number);
       line++;
       let low=0; let high=arr.length-1;
       MergeSort(arr,low,high);
       console.log(arr.join(' '))
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
