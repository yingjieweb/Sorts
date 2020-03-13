//请写一个min函数，要求min(numbers)能返回数组numbers中的最小数字
let min = (arr) => {
  if(arr.length > 2){
    return min([arr[0],min(arr.slice(1))]);
  }else{
    return Math.min.apply(null, arr);
  }
}
console.log(min([2,5,9,6,3,1,7,4]));//1