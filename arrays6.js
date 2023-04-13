console.log(inverse([3, 7, 5, 6, 4]));
console.log(inverse([1, 2, 3]));
console.log(inverse(['a', 'b', 'c']));

function inverse(arr) {
    const arrCopia = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        arrCopia.push(arr[i]);
    }
    return arrCopia;
}