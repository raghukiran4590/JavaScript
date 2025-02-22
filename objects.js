var employee = new Object();

employee.name = "Raghu Kiran";
employee.age = 35;
employee.city = "Tampa";
employee.county = "Hillsborough";
employee.state = "FL",
employee.country = "USA"
employee.job_titles = ["SDE", "SWE", "AD", "PA", "TA"];

console.log(employee);

var employeeJobs = new Array();

employeeJobs.push("SDE", "SWE");

console.log(employeeJobs);

console.log(employee.city);

console.log(employee['age']);