// Common Index of an Array

// Description
// You are given two sorted arraysAandBof sizeNandM.
// You have to find the list of elements common in both the arrays
// The resultant list should also be sorted.
// Note: If there are not elements common in both the arrays, then print-1


// Input
// The first line of the input containsT, the number of test cases

// The first line of each test case, containsN, the number of elements in the arrayA

// The second line of each test case containsNspace separated integers denoting the elements of the arrayA

// The next line containsM, the number of elements in the arrayB.

// The next line containsMspace separated integers denoting the elements of the arrayB.

// Constraints
// 1 <= T <= 10
// 1 <=N, M<= 10^7
// 1 <=A[i], B[i]<= 10^7

// Output
// For each test case, print the number of elements common in both the arrays on a single line, in ascending order,-1if no elements are common between the two arrays, on a new line.

// Sample Input 1 
// 2
// 6
// 1 2 3 4 5 6
// 3
// 3 3 5
// 4 
// 1 2 3 4
// 4 
// 5 6 7 8
// Sample Output 1
// 3 5
// -1

// Hint
// In the first test case, the number of elements common in the two arrays are3, 5, which is the required output.
// In the second test case, there are no common elements between the two arrays, therefore, the output is-1;


function  CommonIndex(n1, arr1, n2, arr2){
    // console.log(n1, arr1, n2, arr2);
    var s = 0;
    var e = 0;
    var temp = "";
    
    while((s < n1) && (e< n2))
    {
        if (arr1[s] == arr2[e])
        {
            temp = temp + arr1[s] + " ";
            s++;
            e++;
        }
        else if (arr1[s] > arr2[e]) 
        {
            e++;
        }
        else
        {
            s++;
        }
    }
    
    if(temp == 0){
        console.log("-1");
    }
    else {
        console.log(temp);
    }
     
}




function runProgram(input){
     input = input.split("\n");
   var line = 1;
   for(var i = 1; i <= +input[0]; i++)
   {
       var n1 = +input[line++];
       var arr1 = input[line++].trim().split(" ").map(Number);
        var n2 = +input[line++];
       var arr2 = input[line++].trim().split(" ").map(Number);
       
       CommonIndex(n1, arr1, n2, arr2);
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

