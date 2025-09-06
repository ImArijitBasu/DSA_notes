function binarySearch(arr, target) {
  const x = arr.sort((a, b) => a - b); // sorted
  let left = 0; // left side
  let right = x.length - 1; // right side
    console.log(x);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // mid value
    if (x[mid] === target) {
      return mid;
    } else if (x[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 3, 2, 5, 6, 2, 12, 14], 50));
