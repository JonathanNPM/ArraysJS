const nums1 = [1, 1, 1, 1, 1];
console.log(isUniform(nums1));
const nums2 = [2, 1, 1, 1, 1];
console.log(isUniform(nums2));

function isUniform(arr) {
    const len = arr.length;
    for(let i = 0; i < len - 1; i++) {
        for(let j = i + 1; j < len; j++) {
            if(arr[i] != arr[j]) return false;
        }
    }
    return true;
}