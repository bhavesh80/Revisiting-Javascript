var myArr = [{
    num: 12,
    str: 'apple',
},{
    num: 2,
    str: 'orange',
},{
    num: 5,
    str: 'pineapple',
},{
    num: 13,
    str: 'banana',
},{
    num: 1,
    str: 'grapes',
},{
    num: 23,
    str: 'kiwi',
},]

myArr.sort(function(val1,val2){
    if (val1.str < val2.str){
        return -1;
    }else{
        return 1;
    }
});

console.log(myArr)
myArr.sort(function(val1,val2){
    if (val1.num < val2.num){
        return -1;
    }else{
        return 1;
    }
});


console.log(myArr)