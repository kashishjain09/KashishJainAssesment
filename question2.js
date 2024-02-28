// Q2.Find the min max in given unsorted array
let arr=[10,2,3,7,5,6,70,40]
let max=Number.MIN_VALUE;
let min=Number.MAX_VALUE;
for(let i in arr){
    if(arr[i]>max){
        max=arr[i];
    }
    else if(arr[i]<min){
        min=arr[i];
    }
    else{
        continue;
    }
}
console.log(`Max Value :${max}, Min Value is: ${min} `)