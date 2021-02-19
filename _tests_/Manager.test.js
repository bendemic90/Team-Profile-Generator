const Manager = require('../lib/Manager');

test("should return the name of the manager", () => {
    const name = "Matilda";
    const result = new Manager("Matilda");

    expect(result.name).toEqual(name);
    })

test("should be an object when instantiated", () => {
    const x = new Manager();

    expect(typeof(x)).toBe("object");
})