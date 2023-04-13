const nums1 = [3, 7, 5, 6, 4];
console.log(max(nums1));
console.log(max([1, 2, 3]));
console.log(max([10, 3, 10, 4]));
console.log(max([-5, 100]));

function max(arr) {
    return arr.reduce((maior, prox) => maior < prox ? prox : maior);
}