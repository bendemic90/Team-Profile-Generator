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

test("will test all methods in Intern", () => {
    const x = new Intern(`Bobby`, 4, `bobby@email.com`, `UofA`)

    expect(x.getEmail(x)).toEqual(`bobby@email.com`);
    expect(x.getRole(x)).toEqual('Intern');
    expect(x.getName(x)).toEqual(`Bobby`);
    expect(x.getSchool(x)).toEqual(`UofA`);
    expect(x.getId(x)).toEqual(4);
})