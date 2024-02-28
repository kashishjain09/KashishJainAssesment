// Q1.Flat array without using any pre-built methord
const arr = [1, 2, 3, [4, 5, 6, [7, 8, [9, 10]]]];

const outputArr = []
function flattenArr(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenArr(arr[i]); 
      } else {
        outputArr.push(arr[i]);
      }
    }
  }
flattenArr(arr)
 console.log(outputArr)
