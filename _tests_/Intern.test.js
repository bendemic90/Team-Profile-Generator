const Intern = require('../lib/Intern');

test("should return the name of the intern", () => {
    const name = "Cartman";
    const result = new Intern("Cartman");

    expect(result.name).toEqual(name);
    })
test("should be an object when instantiated", () => {
    const x = new Intern();

    expect(typeof(x)).toBe("object");
})