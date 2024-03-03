class TestPromise {
  constructor() {
    const a = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("a");
      }, 1000);
    });

    const b = new Promise((resolve) => {
      setTimeout(() => {
        resolve("b");
      }, 1000);
    });

    const c = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("c Error");
      }, 1000);
    });

    Promise.allSettled([a, b, c])
      .then((res) => {
        console.log(res, "resolve");
      })
      .catch((err) => {
        console.log(err, "reject");
      });

    // 当a返回Promise对象时，连续调用then可以使用链式调用
    // a.then(res => {
    //     console.log(res,'a')
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('b')
    //         }, 1000)
    //     })
    // })
    // .then(res => {
    //     console.log(res,'b')
    // })
  }
}

class PrintPromise {
    constructor(){
        const a = new Promise((resolve,reject) => {
            setTimeout(() => {
                reject('a')
            },1000)
        })

        setTimeout(() => {
            console.log('b')
        }, 1000);

        // a.then(res => {console.log(res)})

        const c = async () => {
            const d = await a.then(res => res + 'cccc').catch(err => err + 'dddd')
            console.log(d,'d')
        }
        c()
    }
}

new PrintPromise();

