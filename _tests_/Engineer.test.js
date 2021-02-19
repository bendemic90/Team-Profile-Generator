const Engineer = require('../lib/Engineer');
//const Employee = require('../lib/Employee');

describe("Engineer", () => {
    describe("getName", () => {
        it("should return the name of the engineer", () => {
            const name = "Thomas";
            const result = new Engineer("Thomas");

            expect(result.name).toEqual(name);
        })
    })
})
