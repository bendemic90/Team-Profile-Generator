const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("getName", () => {
        it("should return the name of the employee", () => {
            const name = "Billy";
            const result = new Employee("Billy");

            expect(result.name).toEqual(name);
        })
    })
})