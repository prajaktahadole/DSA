// Sample Input 1 
// 4 5 1 3
// Sample Output 1
// 2



var sumofn = ((n+1) * ((n+1)+1))/2;

var sum = 0;
for (i = 0; i < input.length; i++)
{
  sum = sum + input[i];
}

var missing = sumofn - sum;

console.log(missing);

