////////*************using loop*****************
var s  = "azbbxcdef";
var str = "abcdefghijklmnopqrstuvwxyz";

var res = [];
for(var i = 0; i < s.length; i++)
  {
    if(i%2 !== 0){

      for(var j = 0; j < str.length; j++)
        {
          if(s[i] === str[j])
          {
            res.push(j+1);
            break;
          }
        }
    }else{
      res.push(s[i]);
    }
  }
console.log(res.join(""));



//////////*************using object*****************
var s  = "azbsxcdef";
var obj = {
  a : 1,
  b : 2,
  c : 3,
  d : 4,
  e : 5,
  f : 6,
  g : 7,
  h : 8,
  i : 9,
  j : 10,
  k : 11,
  l : 12,
  m : 13,
  n : 14,
  o : 15,
  p : 16,
  q : 17,
  r : 18,
  s : 19,
  t  : 20,
  u : 21,
  v : 22,
  w : 23,
  x : 24,
  y : 25,
  z : 26,
}


var res = [];
for(var i = 0; i < s.length; i++){
    if(i%2 !== 0)
    {
      for(var x in obj)
      {
        if(s[i] == x)
        {
            res.push(obj[x]);
        }
     }
    }
    else{
      res.push(s[i]);
    }
  }
console.log(res.join(""));