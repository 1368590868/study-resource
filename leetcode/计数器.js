/**
 * 请你编写并返回一个 计数器 函数，它接收一个整型参数 n 。这个 计数器 函数最初返回 n，每次调用它时返回前一个值加 1 的值 ( n ,  n + 1 ,  n + 2 ，等等)。
 * 示例 1：
 * 输入：
 * n = 10
 * ["call","call","call"]
 * 输出：[10,11,12]
 * 解释：
 * counter() = 10 // 第一次调用 counter()，返回 n。
 * counter() = 11 // 返回上次调用的值加 1。
 * counter() = 12 // 返回上次调用的值加 1。
 * 示例 2：
 *
 * 输入：
 * n = -2
 * ["call","call","call","call","call"]
 * 输出：[-2,-1,0,1,2]
 * 解释：counter() 最初返回 -2。然后在每个后续调用后增加 1。
 *
 *
 * 提示：
 *
 * -1000 <= n <= 1000
 * 最多对 counter() 进行 1000 次调用
 * 闭包是能够访问其它函数内部变量的函数。
闭包的作用之一是实现缓存。
当前函数执行完毕后，变量不会被垃圾回收机制回收，可以被缓存继续使用。不过，闭包容易引起内存泄漏，在必要场景需要函数执行完毕清除变量，释放内存，否则只能等到浏览器进程结束。
 */
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return function () {
    return a++;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

console.log(createCounter(10));
