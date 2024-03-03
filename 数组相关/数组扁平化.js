let arr = [1,[2,[3,4]],6]
let str= JSON.stringify(arr)
console.log(str)
console.log(arr.flat(Infinity))
console.log(str.replace(/(\[|\])/g,'').split(',').map(item => +item))

function flatten(arr){
    return arr.reduce((pre,cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
    },[])
}

console.log(flatten(arr))

function ArrFlatten(arr){
    if(!arr.length) return arr
    while(arr.some(item => Array.isArray(item))){
        arr = [].concat(...arr)
    }

    return arr
}

console.log(ArrFlatten(arr))