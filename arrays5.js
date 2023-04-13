const nums = [3, 7, 5, 6, 4];
console.log(contains(nums, 2));
console.log(contains([10, 15, 20], 10));
console.log(contains(["hello", "bye"], "bye"));
console.log(contains([10, 15, 20], 11));

function contains(arr, val) {
    for(const i of arr) {
        if(i === val) return true;
    }
    return false;
}