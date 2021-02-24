const Engineer = require('../lib/Engineer');

test("should return the name of the engineer", () => {
    const name = "Thomas";
    const result = new Engineer("Thomas");

    expect(result.name).toEqual(name);
    })
    
test("should be an object when instantiated", () => {
    const x = new Engineer();

    expect(typeof(x)).toBe("object");
})

test