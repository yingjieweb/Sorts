//sort 函数，要求sort(numbers)能返回一个numbers从小到大排列的数组
let min = (arr) => {
  if(arr.length > 2){
    return min([arr[0],min(arr.slice(1))]);
  }else{
    return Math.min.apply(null, arr);
  }
}
let sort = (arr) => {
  if (arr.length > 2){
    let minNum = min(arr);
    let minIndex = arr.indexOf(minNum);
    arr.splice(minIndex,1);
    return [minNum].concat(sort(arr));
  }else{
    return arr[0] < arr[1] ? arr : arr.reverse();
  }
}
console.log(sort([1,1,1,0,6,8,9,7,1,6,0]));// [0, 0, 1, 1, 1, 1, 6, 6, 7, 8, 9]