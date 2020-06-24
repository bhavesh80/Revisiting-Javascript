//creating factory function
var peopleFactory = function (name, age, city) {

    var temp = {}; // creating object
    //var temp = new Object;
    
    //attaching properties to obj
    temp.age = age; 
    temp.name = name;
    temp.city = city;

    temp.printPerson = function(){
        console.log(this.name + " " + this.age + " " + this.city);
    };
    return temp;

};

var person1 = peopleFactory("bhavesh",23,"Pune")
var person2 = peopleFactory("John",22,"Mumbai")

person1.printPerson();
person2.printPerson();