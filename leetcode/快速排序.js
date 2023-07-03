/**
 * 快速排序：
 * 思路分析
 * 找到中间位置midValue
 * 遍历数组，小于midValue放在left，否则放在right
 * 继续递归，最后concat拼接返回
 * 使用splice会修改原数组，使用slice不会修改原数组（推荐）
 * 一层遍历+二分的时间复杂度是O(nlogn)
 */

/**
 * 快速排序（使用 splice）
 * @param arr:number[] number arr
 */
function quickSort(arr) {
    const length = arr.length
    if (length === 0) return arr
  
    // 获取中间的数
    const midIndex = Math.floor(length / 2)
    const midValue = arr.splice(midIndex, 1)[0] // splice会修改原数组，传入开始位置和长度是1
  
    const left = []
    const right = []
  
    // 注意：这里不用直接用 length ，而是用 arr.length 。因为 arr 已经被 splice 给修改了
    for (let i = 0; i < arr.length; i++) {
      const n = arr[i]
      if (n < midValue) {
        // 小于 midValue ，则放在 left
        left.push(n)
      } else {
        // 大于 midValue ，则放在 right
        right.push(n)
      }
    }
  
    return quickSort(left).concat([midValue], quickSort(right))
  }
   


console.log(quickSort([2,3,7,4,9,5]))