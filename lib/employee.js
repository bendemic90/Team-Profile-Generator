class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName = () => {
        return this.name;
    }
    getId = () => {
        return this.id;
    }
    getEmail = () => {
        return this.email;
    }
    getRole = () => {
        return Employee.name;
    }
}

const testEmp = new Employee('Ben', 1, 'ben@ben.com')
console.log(Employee.name);