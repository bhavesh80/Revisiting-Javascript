var peopleConstructor = function (name, age, city) {

    this.name = name;
    this.age = age;
    this.city = city;

    this.printPerson = function(){
        console.log(this.name + "," + this.age + "," + this.city);
    };
};


var person1 = new peopleConstructor("bhavesh",23,"Pune");
var person2 = new peopleConstructor("John",22,"Mumbai");

person1.printPerson();
person2.printPerson();