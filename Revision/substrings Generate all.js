function generateALlSubstr(N,A){
    
    for(var i = 0; i < N; i++)
    {
        for(var j = i ; j < N; j++)
        {
            var str = "";
            for(var k = i; k <=j; k++ )
            {
                str = str + A[k];
            }
            console.log(str);
        }
    }
   
  }
  