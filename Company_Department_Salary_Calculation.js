// Create a Department Structure

let comapny = {
    departments: [{
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
                    }]},
                {
                name: 'Eli',
                salary: 70000,
                subordinates: []
                }]},
        {
            name: 'Mary',
            salary: 120000,
            subordinates: [
                {
                name: 'Johnny',
                salary: 65000,
                subordinates: []
                }, {
                name: 'Madison',
                salary: 65000,
                subordinates: []    
                }]}]}]};