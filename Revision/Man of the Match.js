// Man of the Match

// Description
// Team RCB has successfully chased a total and finally won their first match in the IPL after a string of losses. Interestingly, the openers managed it comfortably and no wicket fell during their innings in this match.
// The openers Virat Kohli and AB de Villiers played a total of n overs to chase their target. You are presented with an array of size 6n (because 1 over is equal to 6 balls) which consists of the runs scored in that particular ball.
// You know that AB de Villiers took the strike initially and played the first ball.

// You have to find out who scored more runs during the match after n overs to decide the Man of the Match.

// Print "Virat Kohli" if Virat scored more, else "AB de Villiers".Print "Tie" incase when both scored equal runs.

// Note-
// The array consist of values {0,1,2,3,4,6}. There are no extras.
// The strike rotates after every 6 balls or if 1 or 3 run is taken.


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 100) — the number of test cases. Then t test cases follow.

// The first line of each test case contains a single integer n (1 ≤ n ≤ 20) — the number of overs played by the team.

// The second line of each test case contains 6n integers (Ai -> {0,1,2,3,4,6}) — The runs scored in each ball.


// Output
// For each test case, print the answer. The Man of the Match of the game.
// Sample Input 1 
// 3
// 2
// 1 2 0 0 1 1 6 6 4 1 6 1
// 3
// 0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
// 1
// 0 1 0 1 0 0
// Sample Output 1
// AB de Villiers
// Virat Kohli
// Tie


function ManoftheMatch(n, arr){
    
    var viller = 0;
    var virat = 0;
    var ballCount = 1;
    var strike = true; 
    for (let i = 0; i < n*6; i++) {
      if (strike) {
        viller += arr[i];
        
      } else {
        virat += arr[i];
      
      }
      if (arr[i] % 2 !== 0) {
        strike = !strike;
      }
      if (ballCount === 6) {
        ballCount = 0;
        strike = !strike;
      }
      ballCount++;
    }

    if (viller < virat) {
      console.log("Virat Kohli");
    } else if (viller > virat) {
      console.log("AB de Villiers");
    } else {
      console.log("Tie");
    }
}


function runProgram(input){
    input = input.split("\n");
    var line = 1;
    for(var i = 1; i <= +input[0]; i++){
        var n = +input[line++];
        var arr = input[line++].split(" ").map(Number);
        ManoftheMatch(n, arr);
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
