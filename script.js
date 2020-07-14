// Function constructor 

let john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacer'
};


let Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};