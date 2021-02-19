const Employee = require('../lib/Employee');

test("should return the name of the employee", () => {
    const name = "Billy";
    const result = new Employee("Billy");

    expect(result.name).toEqual(name);
    })

test("will check that new Employee() returns an object", () => {
    const x = new Employee();

    expect(typeof(x)).toBe("object");
    })
