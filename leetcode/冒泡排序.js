/**
 * 冒泡排序的原理如下，从第一个元素开始，把当前元素和下一个索引元素进行比较。如果当前元素大，那么就交换位置，重复操作直到比较到最后一个元素，那么此时最后一个元素就是该数组中最大的数。
 * 下一轮重复以上操作，但是此时最后一个元素已经是最大数了，所以不需要再比较最后一个元素，只需要比较到 length - 1 的位置。
 */

function bubbleSort(arr){
    let n = arr.length
    if(!n) return []

    for(let i = 0 ; i< n; i++){     
        // 需要-1 
        for(let j = 0; j< n-i-1; j++){
            console.log(n-i-1)
           if(arr[j] > arr[j+1]){
            // 两两交换
            [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
           }
        }
    }
    return arr
}

/**
 * i = 0; j = 0;
 * arr[0]:2 > arr[0+1]:3  false
 * arr[1]:3 > arr[1+1]:7 false
 * arr[2]:7 > arr[2+1]:4 true
 * temp = 4  arr[2+1] = 7  arr[2] = 4   2347
 */



console.log(bubbleSort([2,3,7,4,9,5]))