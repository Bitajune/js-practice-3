// // // Function constructor 

// // let john = {
// //     name: 'John',
// //     yearOfBirth: 1990,
// //     job: 'teacer'
// // };


// let Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };

// Person.prototype.calculateAge = function () {
//     console.log(2020 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Smith';

// let john = new Person('John', 1990, 'teacher');
// let jane = new Person('Jane', 1969, 'designer');
// let mark = new Person('Mark', 1948, 'retired');


// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);



// Object.create method
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