let add  =  function (a,b){
    return a + b;
};
let multiply  =  function (a,b){
    return a * b;
};

let calc = function(num1, num2, callback){
    return callback(num1,num2)
};

let printParams = function(a,b){
    console.log(`here are the params ${a} ${b}`);
};

console.log(calc(20,20,add));
console.log(calc(20,20,multiply));
console.log(calc(20,20,function(num1,num2){  return num1 - num2 }));
console.log(calc(20,20,printParams));