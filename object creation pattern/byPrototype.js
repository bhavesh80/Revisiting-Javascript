var peopleProto = function(){
};


peopleProto.prototype.age = 0;
peopleProto.prototype.name = "no name";
peopleProto.prototype.city = "no city";

peopleProto.prototype.printPerson = function(){
    console.log(this.name + ", " + this.age + ", " + this.city);
};

var person1 = new peopleProto();
person1.name = "bhavesh";
person1.age = 23;
person1.city = "Pune";

person1.printPerson();


console.log('name' in person1) // true w/o commenting person1.name
// console.log(person1.hasOwnProperty('name'));
console.log(person1.hasOwnProperty('country'));

console.dir(person1);