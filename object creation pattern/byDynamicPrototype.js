var peopleDynamicProto = function (name, age, city) {

    this.name = name;
    this.age = age;
    this.city = city;


    // function printPerson is only created one time. and second time its already available in prototype.

    if (typeof this.printPerson !== 'function') {
        console.log(`called once when type of printPerson was ${typeof this.printPerson}`)
        peopleDynamicProto.prototype.printPerson = function () {
            console.log(this.name + ", " + this.age + ", " + this.city);
        };

    }




};

var person1 = new peopleDynamicProto('Bhavesh',23,"Pune");
person1.printPerson();


console.log(person1.hasOwnProperty('name'));
console.log(person1.hasOwnProperty('printPerson'));
console.dir(person1);