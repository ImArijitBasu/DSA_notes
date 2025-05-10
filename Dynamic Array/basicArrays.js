function push(arr , value) {
    arr[arr.length] =value;
    return arr;
}
console.log(push([1,3,5],6));

function pop(arr){
    if(arr.length === 0) return undefined;
    const last = arr[arr.length - 1];
    arr.length = arr.length -1;
    return last
}
console.log(pop([1 ,5,2,6,3]));
console.log([1,3,45,5].pop());

let array = [1,5,2,3,5,1];
let newArr = array.map(x => x === 5 ? 0 : x)
console.log(newArr);
console.log(array.at(1));

let arr1 = [1,2,4,5];
let arr2 = [2,5,1];

console.log([...arr1 , ...arr2]);

function newArray(n , a,b){
    console.log([...b , ...a].join(' '));
}
newArray(2,arr1, arr2)