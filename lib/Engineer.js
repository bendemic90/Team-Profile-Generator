const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    getGithub = () => {
        return this.github;
    }
    getRole = () => {
        return Engineer.name;
    }
}

const testEng = new Engineer('Bob', 2, 'bob@bob.com', 'bob69_420')
console.log(testEng);