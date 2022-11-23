const { expect } = require("@jest/globals");
const Employee = require("./lib/Employee");

test("creates an Employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("gets Employee's name", () => {
    const employee = new Employee("Employee");
    expect(employee.getName()).toBe("Employee");
});

test("gets Employee's id", () => {
    const employee = new Employee("Employee");
    expect(employee.getId()).toBe("1");
});

test("get Employee's email", () => {
    const employee = new Employee("Employee", "1", "employee@fakemail.com");
    expect(employee.getEmail()).toBe("employee@fakemail.com");
});

test("getRole() returns Employee", () => {
    const employee = new Employee("Employee");
    expect(employee.getRole()).toBe("Employee");
});