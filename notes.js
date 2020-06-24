console.table(a, ['age'])
console.time('t1')
console.time('t2')

setTimeout(() => {
    console.timeEnd("t1")
},5000)

console.timeLog("t2")
console.timeEnd("t2")
console.log('%c Javascript is awesome 🌈 ', 'color: pink; font-weight: bold; background-color: black')
