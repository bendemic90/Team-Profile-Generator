const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    getSchool = () => {
        return this.school;
    }
    getRole = () => {
        return Intern.name;
    }
}

const testIntern = new Intern('Dwight', 6, 'dwight@intern.com', 'Adelaide Uni')
console.log(testIntern);