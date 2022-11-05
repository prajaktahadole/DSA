// 1. Sort Array of 0s, 1s, 2s

Input = [1, 2, 0, 0, 1, 2, 0]
// Output = [0, 0, 0, 1, 1, 2, 2]


var zero =0;
var one = 0;
var two = 0;


for(var i = 0; i < Input.length; i++)
{
    if(input[i] == 0){
        zero++;
    }
    if(input[i] == 1){
        one++;
    }
    if(input[i] == 2){
        two++;
    }
}


i = 0;
while(zero > 0){
    input[i] = 0
}

while(one > 0){
    input[i] = 1
}

while(two > 0){
    input[i] = 2
}


console.log(input)




//  other


function Sort(n, arr)
{
    let low = 0;
    let high = n-1;
    let mid = 0;

    while(mid <= high)
    {
        if(arr[mid] == 0)
        {
            swap(arr[low], arr[mid]);
            mid++;
            low++;
        }
        else if(arr[mid] == 1)
        {
            mid++;
        }else{
            swap(arr[mid], arr[high]);
            high--
        }
    }
}





/// arr = [1, 2, 4, 1, 1, 11, 45, 10, 50, 47, 36, 100, 98]



for(var i = 0; i < length; i++)
{
    var num = arr[i];
    count[num]++;
}


// count[0] = 0
// count[1] = 3
// count[2] = 1
// count[4] = 1
// count[11] = 1
// count[10] = 1
// count[50] = 1
// count[47] = 1
// count[36] = 1
// count[100] = 1
// count[98] = 1


var index = 0;
for(var i = 0; i < 100; i++)
{
    while(count[i] > 0)
    {
        arr[index] = i;
        index++;
        count[i]--;
    }
}

