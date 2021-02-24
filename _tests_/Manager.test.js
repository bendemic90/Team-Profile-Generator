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

test("will test all methods in Manager", () => {
    const x = new Manager(`Beatrice`, 3, `beatrice@email.com`, 8)

    expect(x.getEmail(x)).toEqual(`beatrice@email.com`);
    expect(x.getRole(x)).toEqual('Manager');
    expect(x.officeNumber).toEqual(8);

})