function search(arr, target, start, end) {
  let targetIndex = -1;

    let mid = Math.floor((start + end) / 2);
  //   使用位运算避免数字过大溢出
//   let mid = Math.floor(start + ((end - start) >> 1));
  console.log(start + ((end - start) >> 1))

  if (arr[mid] === target) {
    targetIndex = mid;
    return targetIndex;
  }

  //  如果查询完没有发现
  if (start >= end) return targetIndex;

  //   如果中间的小于目标值，则继续右边搜索，从中间开始，到末尾结束，并索引+1
  if (arr[mid] < target) return search(arr, target, mid + 1, end);
  //   如果中间值大于目标值，则继续左边搜索，从start开始，结尾为中间-1
  else return search(arr, target, start, mid - 1);
}
const arr = [2, 3, 6, 7, 10, 13];
const res = search(arr, 7, 0, arr.length - 1);

if (res === -1) console.log("not found target data");
else console.log(`this index is ${res}`);
