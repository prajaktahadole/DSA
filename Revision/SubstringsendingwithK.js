// Substrings ending with K

// Description
// You are given a string A, of length N, and a character K. Find the count of all the substrings of A, which end at K.

// Note: The string A contains only lower case characters.


// Input
// The first line of the input contains T, the number of test cases.

// The first line of each test case, contains N, the length of the string.

// The next line contains the string A itself.

// The next line contains the character K.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 50


// Output
// For each test case, print the number of substrings of A that are ending at the character K, on a new line.


// Sample Input 1 

// 1
// 4
// aman
// a
// Sample Output 1

// 4
// Hint

// In the given sample test case, the value of K = 'a'. The total number of substrings of A, which are ending at K = 'a', are {a,ama,ma,a}. Therefore, the required output is 4.


function substringsEndingWithK(N,A,K){
    
    var count = 0;
    for(var i = 0; i < N; i++)
    {
        for(var j = i; j < N; j++)
        {
                var str = ""
            for(var k = i; k <=j; k++)
            {
                 str =  str+ A[k];
            }
            if(str[str.length-1] == K){
                count++;
            }
        }
    }
      console.log(count);
}
