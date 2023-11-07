/* 
    -Employees (parent class)
        - Manager
            - create tables
        - Host
            - set tables
        - Server
            - serve tables

        *Capture employee details
        Employee Number

    -Table
*/

// create array

const employeeNumbers = [];
// ! What is static doing here

class Employee {
// Only information getting passed by employee
    static setEmployee(role,name,payRate) {
        // Create a random employee number
        const setEmployeeNumber = Math.floor(Math.random ()* (100-1) + 1);
        let numberToUse;

        if(employeeNumbers.includes(setEmployeeNumber)) 
        {
            let tempNumber = setEmployeeNumber + 'a';
            employeeNumbers.push(tempNumber);
            numberToUse = tempNumber;
        } else {
            employeeNumbers.push(setEmployeeNumber);
            numberToUse = setEmployeeNumber;
        }

        // Set Hire Date by creating a new object
        let today = new Date();

        return new Manager(name,numberToUse,today,payRate)
    };



    constructor(name, empNumber, date, payRate) {
        this.name = name;
        this.employeeNumber = empNumber;
        this.dateHired = date;
        this.payRate = Number(payRate.toFixed(2));
    }
}

// *manager

// referencing this.name keys below for parameter names of constructor
// ! What is a super? 
// ! What does extends do?
class Manager extends Employee {
    constructor(name, employeeNumber, dateHired, payRate) 
    {
        super(name, employeeNumber, dateHired, payRate); 
        this.role = 'Manager';
    }
}

// ! Why is there a new before date?
const employee = new Employee('Jane', 2, new Date(), 11)
const manager = new Manager('Joe', 1, new Date(), 18)
console.log(employee, manager);
