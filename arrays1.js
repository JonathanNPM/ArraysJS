const nums = [3, 7, 5, 6, 4];
printReverse(nums);

function printReverse(arr) {
    for(let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}