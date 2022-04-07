function masaiTraversalAndQueries(N, M, q, arr){
  
    var res = "";
   if(q == 1)
   {
       for(let i = 0; i < N; i++)
       {
           if(i % 2 === 0)
           {
               for(let j = 0; j < M; j++)
               {
                  res = res + arr[i][j] +" "; 
               }
           }
           else{
               for(let j = M-1; j >= 0; j--){
                 res = res + arr[i][j] +" ";   
               }  
           }
       }console.log(res);
   }
   else if(q == 2)
   {
      
       for(let i = 0; i < N; i++)
       {
           if(i % 2 !== 0)
           {
               for(let j = 0; j < M; j++)
               {
                  res = res + arr[i][j] +" "; 
               }
           }
           else{
               for(let j = M-1; j >= 0; j--){
                 res = res + arr[i][j] +" ";   
               }  
           }
       }console.log(res);
   }
}
