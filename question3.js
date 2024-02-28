// Q3.Sort strings in ascending order
let arr = ['J', 'Z', 'D', 'Q', 'L', 'W', 'A', 'H', 'Y', 'K', 'G', 'N', 'V', 'R', 'P', 'X', 'C', 'M', 'F', 'O', 'U', 'S', 'I', 'E', 'T', 'B'];
for (let i =0; i<arr.length;i++) {
    for (let j =0; j< arr.length-i-1;j++) {
        let conv1 =arr[j].charCodeAt();
        let conv2 =arr[j + 1].charCodeAt();
        if (conv1 > conv2) {
            let temp =arr[j];
            arr[j]=arr[j + 1];
            arr[j + 1]=temp;
        }
    }
}
console.log(arr);

