// Function constructor
/*

let Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function () {
    console.log(2020 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

let john = new Person('John', 1990, 'teacher');
let jane = new Person('Jane', 1969, 'designer');
let mark = new Person('Mark', 1948, 'retired');


john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/




// Object.create method
/*
let personProto = {
    calculateAge: function () {
        console.log(2020 - this.yearOfBirth);
    }
};

let john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';


let jane = Object.create(personProto,
    {
        name: { value: 'Jane' },
        yearOfBirth: { value: 1969 },
        job: { value: 'designer' }
    });

console.log(john);
console.log(jane);
*/





// Primatives vs objects


// Primatives
/*
let a = 13;
let b = a;
a = 27;
console.log(a, b);

// Objects
let objectOne = {
    name: 'John',
    age: 25
};
let objectTwo = objectOne;
objectOne.age = 30;

console.log(objectOne.age, objectTwo.age);


// Functions
let age = 28;
let obj = {
    name: 'Bita',
    city: 'Tustin'
};

function change(a, b) {
    a = 30;
    b.city = 'Los Angeles'
}
change(age, obj)

console.log(age, obj.city);
*/

let letters = ['a', 'b', 'c'];
let lettersTwo = letters;
letters = ['x', 'y', 'z'];

console.log(letters, lettersTwo)



