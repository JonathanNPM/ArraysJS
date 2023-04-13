const nums1 = [3, 7, 5, 6, 4];
console.log(sumArray(nums1));
console.log(sumArray([1, 2, 3]));
console.log(sumArray([10, 3, 10, 4]));
console.log(sumArray([-5, 100]));

function sumArray(arr) {
    return arr.reduce((acc, prox) => acc + prox);
}