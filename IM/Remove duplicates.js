input = "caabca";
result = "cab"

/// using map

var str = "caabca";
var map = new Map();

for(var i = 0; i < str.length; i++)
{
    if(!map.has(str[i]))
    {
        map.set(str[i], i)
    }
}



/// using Object

input = "aabca";
result = "abc"

var str = "aabca"

var obj = {}
for(var i = 0; i < str.length; i++)
{
    if(obj[str[i]] == undefined)
    {
        obj[str[i]] = 1
    }
    else{
        obj[str[i]] = obj[str[i]]+1
    }
}

var res = "";
for(k in obj)
{
    res = res+ k
}

console.log(res)







/// using loop


input = "aabca";
result = "abc"

var e = ""
for(var i = 0; i < str.length; i++)
{
    isPresent= false;
    var temp = str[i];
    for(var j = 0 ; j < e.length; i++)
    {
        if(e[j] == temp) 
        {
            isPresent= true;
            break;
        }
    }

    if(!isPresent){
        e = e+ s
    }
}



