const inquirer = require("inquirer");
async function employeeInfo() {
    return inquirer 
const{data} = await
        prompt ([{
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [{
                name: " add new employee",
                value: "ADD_EMPLOYEES"
            },
            {
                name: "remove employee",
                value: "REMOVE_EMPLOYEE"
            },
            {
                name: "update employee",
                value: "UPDATE_EMPLOYEE"
            },
            {
                name: "add department",
                value: "ADD_DEPARTMENT"
            },
            {
                name: "remove department",
                value: "REMOVE_DEPARTMENT"
            },
            {
                name: "update department",
                value: "UPDATE_DEPARTMENT"
            },
            {
                name: "add role",
                value: "ADD_ROLE"
            },
            {
                name: "remove all role",
                value: "REMOVE_ROLE"
            },
            {
                name: "update role",
                value: "UPDATE_ROLE"
            },


            ]
        }])
    
    async function findALLEmployees() {
        const employees = await db.findAllEmployees();
        console.log("\n"); console.table(employees); employeeInfo();
    }

    async function removeEmployee() {
        const employee = await db.removeEmployee();
        console.log("\n"); console.table(employee); employeeInfo();
    }

    async function updateEmployee() {
        const employees = await db.updateEmployee();
        console.log("\n"); console.table(employees); employeeInfo();
    }

    async function addEmployee() {
        const employees = await db.addEmployee();
        console.log("\n"); console.table(employees); employeeInfo();
    }



    async function addDepartment() {
        const department = await db.addDepartment();
        console.log("\n"); console.table(department); employeeInfo();
    }

    async function updateDepartment() {
        const department = await db.updateDepartment();
        console.log("\n"); console.table(department); employeeInfo();
    }

    async function removeDepartment() {
        const department = await db.removeDepartment();
        console.log("\n"); console.table(department); employeeInfo();
    }

    async function addRole() {
        const role = await db.addRole();
        console.log("\n"); console.table(role); employeeInfo();
    }

    async function updateRole() {
        const role = await db.updateRole();
        console.log("\n"); console.table(role); employeeInfo();
    }

    async function removeRole() {
        const role = await db.removeRole();
        console.log("\n"); console.table(role); employeeInfo();
    }


switch (data) {
    case "FIND_ALL_EMPLOYEES":
        return findALLEmployees();
    case "ADD_EMPLOYEE":
        return addEmployee();
    case "REMOVE_EMPLOYEE":
        return removeEmployee();
    case "UPDATE_EMPLOYEE":
        return updateEmployee();

    case "ADD_ROLE":
        return addRole();
    case "REMOVE_ROLE":
        return removeRole();
    case "UPDATE_ROLE":
        return updateRole();
    case "ADD_DEPARTMENT":
        return addDepartment();
    case "REMOVE_DEPARTMENT":
        return removeDepartment();
    case "UPDATE_DEPARTMENT":
        return updateDepartment();
}
}
employeeInfo();
