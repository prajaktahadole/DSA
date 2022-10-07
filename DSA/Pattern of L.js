// Pattern of L

// Description
// You are given a number stored in a variable with the nameN

// Print the pattern as shown below, according to the value stored inN

// For example, consider the value stored inN = 5

// Then, the required pattern will be as follows, which represents the letterL

// *
// *
// *
// *
// * * * * *


// Input
// The first and the only line of the input contains the valueN


// Output
// Print the pattern as shown in the problem statement


// Sample Input 1 

// 4
// Sample Output 1

// *
// *
// *
// * * * *




function patternOfL(N) {
    
    for(var i = 0; i < N; i++)
        {
             var output = "";
           for(var j = 0; j < N; j++)
           {
               if(j ===0 || i == N -1)
               {
                  output = output + "*" +" ";
               }
               else
               {
                 output = output + "";
               }
           }
           console.log(output);
        }
}
