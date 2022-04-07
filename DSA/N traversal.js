function nTraversal(matrix) {
  
    var N =matrix[0].length-1;
    
    var res = [];
       
     for(var i = N; i >= 0; i--)
     {
         res = res + matrix[i][0] + " ";
     }
     
     for(i = 1; i <= N; i++)
     {
         res = res + matrix[i][i]+ " ";
     }
     
     for(i = N-1 ; i >= 0; i--)
     {
         res = res + matrix[i][N]+ " ";
     }
     console.log(res);
   }
   