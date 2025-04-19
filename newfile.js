var age = 20;
age = 21;

let gender = 'female';
gender = 'male';

const institute = 'X-Workz';
document.writeln('Age: ' + age + '<br>'); 

let emp1 = { id: 10, empName: 'Poorvi', salary: 100000 };

let emp2 = new Object();
emp2.id = 11;
emp2.empName = 'Raksha';
emp2.salary = 10000;
emp2.id = 12;

function Employee(id, empName, salary) {
    this.id = id;
    this.empName = empName;
    this.salary = salary;
}
let emp3 = new Employee(13, 'Kiran', 50000);