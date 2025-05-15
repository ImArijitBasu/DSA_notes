function detectDuplicate(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      if (
        (mid > 0 && arr[mid - 1] === target) ||
        (mid < arr.length - 1 && arr[mid + 1] === target)
      ) {
        console.log("true");
        return
      }
      else{
        console.log("false");
        return
      }
    }
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  console.log("false");;
}
detectDuplicate([1, 2, 3, 4, 5], 7); // false
detectDuplicate([1, 1, 2, 3, 5], 1); // true
detectDuplicate([1, 2, 3, 4, 5, 7, 7], 7); // true
detectDuplicate([1, 2, 2, 3, 4], 2); // true

function leftSumArray(arr){
    const result = [];
    let sum = 0;

    for(let i = 0; i <arr.length; i++){
        result.push(sum);
        sum += arr[i];
    }
    console.log(result.join(' '));
}
leftSumArray([1, 2, 3, 4, 5]); // 0 1 3 6 10
leftSumArray([5, 10, 15]);     // 0 5 15
