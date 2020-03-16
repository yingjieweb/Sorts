/**
 * 方法说明：计数排序
 * @param {Array} array 待排序数组
 * @return {Array}
 */
//方法一
function countingSort(array) {
    let len = array.length,
        B = [],
        C = [],
        min = max = array[0];
    console.time('计数排序耗时');
    for (let i = 0; i < len; i++) {
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
        C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
    }
    for (let j = min; j < max; j++) {
        C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
    }
    for (let k = len - 1; k >= 0; k--) {
        B[C[array[k]] - 1] = array[k];
        C[array[k]]--;
    }
    console.timeEnd('计数排序耗时');
    return B;
}
let arr = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];
console.log(countingSort(arr)); //[1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 6, 7, 7, 8, 8, 9, 9]

//方法二
let countSort = arr =>{
    let hashTable = {}, max = 0, result = [];
    for(let i=0; i<arr.length; i++){ // 遍历数组
        if(!(arr[i] in hashTable)){ // 视频中这一行写错
            hashTable[arr[i]] = 1;
        }else{
            hashTable[arr[i]] += 1;
        }
        if(arr[i] > max) {max = arr[i]};
    }
    for(let j=0; j<=max; j++){ // 遍历哈希表
        if(j in hashTable){
            for(let i = 0; i<hashTable[j]; i++){
                result.push(j);
            }
        }
    }
    return result
}
let arr = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];
console.log(countSort(arr)); //[1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 6, 7, 7, 8, 8, 9, 9]