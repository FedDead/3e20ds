const array = [23, 4, 67, 32, 1, 7, 56, 5, 89];
const mergeSort = array => {
    if (array.length < 2){
        return array;
    }
    const middle = Math.floor(  array.length / 2);
    const left = array.slice(0, middle), right = array.slice(middle, array.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]){
            res.push(left.shift());
        }
        else{
            res.push(right.shift());
        }
    }
    while (left.length){
        res.push(left.shift());
    }
    while (right.length){
        res.push(right.shift());
    }
    return res;
};
console.log(mergeSort(array));