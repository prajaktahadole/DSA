// Steal as much as you can 

// Description
// A thief is stealing from a jewellery store and wants to steal the greatest value of gems possible. However, the getaway car he brought with him can only fit a maximum weight ofC. All the gems in the store have a value and a weight associated with them such that gem ihas a value v(i)and a weight w(i).
// Your task is to figure out the maximum valueVof gems he can steal given the weight limit of the car. You can break a given gem into any fraction of itself.
// NOTE: Maximum value vshould be rounded to the nearest integer

// For example:
// Let Total Weight C = 50
// Number of gems = 3
// The Value of gems: 60 100 120
// The Weight of gems: 10 20 30
// The total value of the gems he can carry is = 240
// The fraction of each item taken is: 1 1 0.66666666666
// Total weight is : 1*10 + 1*20 + 0.66666666666*30 = 49.999999999799996


// Input
// Input Format

// First line contains an integer denoting the capacity C
// Second line contains the total number of gems n
// Third line contains the value of each gem separated by a space
// Fourth line contains the weight of each gem separated by a space
// Constraints
// 0 <= C
// 0 < n <= 1000000
// 0 <= v(i)
// 0 <= w(i)

// Output
// For each test case output a single integer: the maximum value rounded to the nearest integer
// Sample Input 1 
// 50 
// 3
// 60 100 120 
// 10 20 30
// Sample Output 1
// 240


function Steal(totalwt, n, val, wt ){

    var empty = [];
    for(var i = 0; i < n; i++){
        var x = [];
       x.push(val[i]/wt[i], val[i], wt[i]);
       empty.push(x);
    }
    //  console.log(empty);
    empty.sort((a, b)=>(b[0]-a[0]));
    
     console.log(empty); 
    
     var total_profit = 0;
     var current_wt = 0;
     
     for(let i = 0; i < n; i++){
        
         current_wt = current_wt + empty[i][2];
         total_profit = total_profit +empty[i][1];
         
        //  console.log(current_wt, total_profit);
         
         if(current_wt> totalwt){
             current_wt = current_wt - empty[i][2];
             total_profit =total_profit -empty[i][1];
             
             var diff = totalwt -current_wt;
             total_profit = total_profit + (diff * empty[i][0]);
              return console.log(Math.round(total_profit));
         }
     }
     return console.log(Math.round(total_profit));
    
}


function runProgram(input){
    input = input.split('\n');
    
    var totalwt = +input[0];
    var n = + input[1];
    
    var val = input[2].split(" ").map(Number);
    var wt = input[3].split(" ").map(Number);

    // console.log(empty)
    
    Steal(totalwt, n, val, wt);
    
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