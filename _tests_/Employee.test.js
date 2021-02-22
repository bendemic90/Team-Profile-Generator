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

test("will check and return the employeeID", () => {
    const x = new Employee(`Billy`, 2)
    const testValue = 2;

    expect(x.id).toEqual(testValue);
})

test("will check and return email", () => {
    const x = new Employee(`Billy`, 2, `billy@email.com`)
    const testValue = `billy@email.com`

    expect(x.email).toEqual(testValue);
})

test("will test all methods in Employee", () => {
    const x = new Employee(`Billy`, 2, `billy@email.com`)

    expect(x.getEmail(x)).toEqual(`billy@email.com`);
    expect(x.getRole(x)).toEqual('Employee');
    expect(x.getName(x)).toEqual(`Billy`);
    expect(x.getId(x)).toEqual(2);
})
