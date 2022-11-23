const Manager = require('./lib/Manager');
const Employee = require("./lib/Employee");

test('creates a manager object', () => {
    const manager = new Manager('Manager4');

    expect(typeof(manager)).toBe('object');
});

test('gets office number', () => {
    const manager = new Manager('Manager', '4', 'manager@fakemail.com');

    expect(manager.getOfficeNumber()).toBe('1');
});

test('getRole() returns Manager', () => {
    const manager = new Manager('Manager');

    expect(manager.getRole()).toBe('Manager');
});