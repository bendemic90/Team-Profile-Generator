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

test("will test all methods in Engineer", () => {
    const x = new Engineer(`Billy`, 3, `billy@email.com`, `billy222`)

    expect(x.getEmail(x)).toEqual(`billy@email.com`);
    expect(x.getRole(x)).toEqual('Engineer');
    expect(x.getName(x)).toEqual(`Billy`);
    expect(x.getGithub(x)).toEqual(`billy222`);
    expect(x.getId(x)).toEqual(3);
})