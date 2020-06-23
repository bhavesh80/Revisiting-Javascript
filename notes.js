console.table(a, ['age'])
console.time('t1')
console.time('t2')

setTimeout(() => {
    console.timeEnd("t1")
},5000)

console.timeEnd("t2")
