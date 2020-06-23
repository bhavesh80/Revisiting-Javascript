var addTo = function(passed){
    
    var add = function(inner){
        return passed + inner;
    };
    return add;
};



var returnedAdd = new addTo(3);
// it keeps the value 3 in scope of closure after returning add function
// it preserves the variable inside function as property as closure, when on execution it uses that closure
// to do the calculation


//   CLOSURES ARE NOTHING BUT FUNCTION WITH PRESERVED DATA.

console.dir(returnedAdd(1)) // check in property closure passed would be saved.
console.log(returnedAdd)
