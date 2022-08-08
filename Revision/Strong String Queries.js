// Strong String Queries 

// Description
// You are given n strings indexed from 1,2,..,n each having length not more than 10. A string is strong if the first and the last characters of the string is a vowel.
// You are very curious and so you have q queries each having two integers - start index and end index [si,ei].
// You have to answer the number of strings that are strong in that given interval for each query.
// Please see the sample I/O for more understanding.


// Input
// The first line of the input contains one integer n (1 ≤ n ≤ 100000) — the number of strings.
// The second line of the input contains n strings separated by space. (1 ≤ length of each string ≤ 10).
// The third line of the input contains one integer q (1 ≤ q ≤ 100000) — The number of queries.
// The next q lines of each test case contain 2 integers si and ei (1 ≤ si ≤ ei ≤ n) - the indexes (start and end).

// Output
// For each query, print the answer in a new line: The number of strong strings in that interval (both inclusive).

// Sample Input 1 
// 5
// aba suna oua tes aba
// 5
// 1 5
// 2 4
// 1 3
// 3 5
// 5 5
// Sample Output 1
// 3
// 1
// 2
// 2
// 1


function runProgram(input){
    
    input = input.trim().split("\n");
    let len = +input[0];
    let arr = input[1].trim().split(" ");
    let queries = +input[2];
    let vowels = { a: true, e: true, i: true, o: true, u: true };
    
    let res = new Array(arr.length + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
      if (
        vowels[arr[i][0]] === true &&
        vowels[arr[i][arr[i].length - 1]] === true
      ) {
        res[i + 1] = res[i] + 1;
      } else {
        res[i + 1] = res[i] + 0;
      }
    }
    var line = 3;
    for (let i = 0; i < queries; i++) {
      let [start, end] = input[line++].trim().split(" ").map(Number);
      console.log(res[end] - res[start - 1]);
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
  
