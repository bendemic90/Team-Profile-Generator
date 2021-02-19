const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getRole = () => {
        return Manager.name;
    }
}

module.exports = Manager;

const testMan = new Manager('Sally', 3, 'sally@bob.com', 5)
console.log(testMan);