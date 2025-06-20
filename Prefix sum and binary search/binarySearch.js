function binarySearch(arr , target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid] < target) left = mid + 1;
        else right = mid - 1
        if(arr[mid] === target)return mid;
    }
    return "not found"
}
console.log(binarySearch([1,2,4,5,6,12,53,56] ,53));
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 50;
let result = binarySearch(arr, target);

if (result !== -1) {
  console.log(`Element found at index ${result}`);
} else {
  console.log("Element not found");
}