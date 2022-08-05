// Merge Sorting Ended
// Description
// You are given N numbers. Your task is to write MERGE SORT sorting algorithm (from scratch) to sort those N numbers.
// USING ANY OTHER ALGORITHM OR IN BUILT FUNCTION WOULD LEAD TO DISQUALIFICATION FROM NEXT HACKERRANK CONTEST

// Input
// Input Format:
// First line of input contains N
// Next line contains N space separated integers.

// Constraints:
// N < 1000000

// Output
// Output the sorted form of provided numbers

// Sample Input 1 
// 5
// 3 5 0 9 8
// Sample Output 1
// 0 3 5 8 9


function MergeSort(arr,low,high){
    if(low==high){
        return;
    }
    let mid= Math.floor((low+high)/2);
     MergeSort(arr,low,mid);
    MergeSort(arr,mid+1,high);
    
    mergeElement(arr,low,high,mid);
}



function   mergeElement(arr,low,high,mid)
{
   let arr1=[]; 
   let arr2=[];
   for(let i=low; i<=mid; i++)
   {
       arr1.push(arr[i]);   
   }
   for(let i=mid+1; i<=high; i++)
   {
       arr2.push(arr[i]);
   }
   let left=0; let right=0; let index=low;
   
   while(left<arr1.length && right<arr2.length)
   {
       if(arr1[left]<= arr2[right])
       {
           arr[index]=arr1[left];
           left++;
       }
       else {
           arr[index]=arr2[right];
           right++;
       }
       index++;
   }
   while(left<arr1.length)
   {
       arr[index]=arr1[left];
       left++;
       index++;
   }
   while(left<arr2.length)
   {
       arr[index]=arr2[left];
       right++;
       index++;
   }
}



function runProgram(input){
    input=input.trim().split('\n');
    let n=+input[0];
    let arr=input[1].trim().split(' ').map(Number);
    let low=0; let high=arr.length-1;
    MergeSort(arr,low,high);
    console.log(arr.join(' '))   
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