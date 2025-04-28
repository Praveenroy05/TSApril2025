// class  - ES6 (ECMA SCRIPT 6 - 2015)
// Syntax : 

import { Locator } from "playwright"

/*
class ClassName{

// propeties

key1 : datatype
key2 : datatype
private key3

static key4

constructor(key, keys, keys1){
   this.key1 = key
   this.key2 = keys
   this.key3 = keys1
}

// methods

info(arg) :returnType{
// code
this.key1
}

static info1(arg) :returnType{
 //code
}

}


// ClassName obj = new ClassName(....) - Java

let obj  = new ClassName(parameter)

obj.key1
obj.info()
obj.key3

ClassName.key4
ClassName.info1()


*/


class Employee{

   // property

  empid :number
  empName
  private empAge
  empSalary
  static cname = "ABCD"
  readonly increasedSalary = 100000

  constructor(eid, eName, eAge, eSalary) {
      this.empid = eid, // this.empid = 101
      this.empName = eName, // this.empName = "John"
      this.empAge = eAge,  // this.empAge = 34
      this.empSalary = eSalary // this.empSalary = 200000
  }

employeeInformation(){
   console.log("Employee ID: ", this.empid)
   console.log("Employee Name: ", this.empName)
   console.log("Employee Age: ", this.empAge)
   console.log("Employee Salary: ", this.empSalary)
   console.log("Employee Company: ", Employee.cname);
   console.log("Increase Salary: ", this.increasedSalary);
}

static greeting(){
   console.log(`Welcome to ${Employee.cname} company`);
}

}


let emp = new Employee(101, "John", 34, 200000)
let username = emp.employeeInformation()
console.log(username);
Employee.greeting()
emp.empid = 201
// emp.increasedSalary = 50000

Employee.cname = "LTD"
console.log("Cname: ", Employee.cname);




console.log(emp.empid);
console.log(emp.empName);
console.log(emp.empSalary);
console.log(emp.increasedSalary);
//console.log(emp.empAge);

let emp1 = new Employee(501, "Joe", 30, 205000)
emp1.employeeInformation()


