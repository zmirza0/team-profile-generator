const Intern = require('./lib/Intern');
const Employee = require("./lib/Employee");

test('creates an Intern object', () => {
    const intern = new Intern('Intern');

    expect(typeof(intern)).toBe('object');
});

test("gets Intern's school", () => {
    const intern = new Intern('Intern', '3', 'email', 'school');

    expect(intern.school).toBe('school');
});

test('getRole() returns Intern', () => {
    const intern = new Intern('Intern');

    expect(intern.getRole()).toBe('Intern');;
});