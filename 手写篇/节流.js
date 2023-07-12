// function throttle(func,delay){
//     var timer = 0

//     return function(){
//         let context = this
//         let args = arguments
//         if(timer) return

//         timer = setTimeout(()=>{
//             func.apply(context,args)
//             timer = 0
//         },delay)
//     }
// }

// setInterval(() => {
//     throttle(()=>console.log('123'),2000)()
// }, 100);


// func是用户传入需要防抖的函数
// wait是等待时间
const throttle = (func, wait = 50) => {
    // 上一次执行该函数的时间
    let lastTime = 0
    return function(...args) {
      // 当前时间
      let now = +new Date()
      console.log(now - lastTime > wait)

      // 将当前时间和上一次执行函数时间对比
      // 如果差值大于设置的等待时间就执行函数
      if (now - lastTime > wait) {
        lastTime = now
        func.apply(this, args)
      }
    }
  }
  
  setInterval(
    throttle(() => {
      console.log(1)
    }, 500),
    1
  )