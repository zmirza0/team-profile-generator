const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");

test("creates an Engineer object", () => {
    const engineer = new Engineer("Engineer");

    expect(typeof(engineer)).toBe("object");
});

test("gets Github username", () => {
    const engineer = new Engineer("Engineer", "2", "engineer@fakemail.com", "EngineerGithub");

    expect(engineer.github).toBe("EngineerGithub");
});

test("getRole() returns Engineer", () => {
    const engineer = new Engineer("Engineer");

    expect(engineer.getRole()).toBe("Engineer");
});