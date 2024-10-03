// Create a Department Structure

let company = {
    departments: [
        {
            departmentName: 'Sales',
            employees: [{
                name: 'Sam',
                salary: 120000,
                subordinates: [{
                    name: 'Kirk',
                    salary: 80000,
                    subordinates: [{
                        name: 'Jill',
                        salary: 50000,
                        subordinates: []
                    }]
                },
                {
                    name: 'Eli',
                    salary: 65000,
                    subordinates: []
                }]
            }]
        },
        {
            departmentName: 'Marketing',
            employees: [{
                name: 'Mary',
                salary: 120000,
                subordinates: [
                    {
                        name: 'Johnny',
                        salary: 65000,
                        subordinates: []
                    }, 
                    {
                        name: 'Madison',
                        salary: 65000,
                        subordinates: []    
                    }
                ]
            }]
        }
    ]
};

console.log(company)

// Create a Recursive Function to Calculate Total Salary for a Department

function calculateDepartmentSalary(department) {
    let totalSalary = 0

    function addSalaries(employees) {
        employees.forEach(employee => {
            totalSalary += employee.salary;
            if (employee.subordinates && employee.subordinates.length > 0) {
                addSalaries(employee.subordinates);
            }
        }

        )
    }
    addSalaries(department.employees);
    return totalSalary;
}

company.departments.forEach(dept => {
    let salary = calculateDepartmentSalary(dept);
    console.log(`Total salary for ${dept.departmentName} department: $${salary}`);
    dept.totalSalary = salary;
});

// Create a Function to Calculate the Total Salary for All Departments

function calculateCompanySalary(company) {
    let companySalary = 0;

    company.departments.forEach(department => {
        companySalary += department.totalSalary || 0;
    });

    return companySalary;
}

let companyTotalSalary = calculateCompanySalary(company);
console.log(`The total salary for the whole company is $${companyTotalSalary}`);