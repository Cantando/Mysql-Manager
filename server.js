const inquirer = require("inquirer");
async function employeeInfo() {
    return inquirer

    async function viewALLEmployees() {
        const employees = await db.viewAllEmployees();
        console.log("\n"); console.table(employees); employeeInfo();
        inquirer
            .prompt({
                name: "action",
                type: "rawlist",
                message: "What would you like to do?",
                choices: [
                    "View all employees? ",
                    "View all employees by department?",
                    "view all employees by role?",
                    "add a employee? ",
                    "add employee by department?",
                    "add employee by role?",
                    "remove  employee? ",
                    "remove employee by department?",
                    "remove employees by role?",
                    "update  employee? ",
                    "update employee by department?",
                    "update employees by role?",
                ]
            })
    }

    async function removeEmployee() {
        const employee = await db.removeEmployee();
        console.log("\n"); console.table(employee); employeeInfo();
        return inquirer
            .prompt([
                {
                    type: "list",
                    message: "Which employee do you want to remove?",
                    name: "employeeInfo",
                    choices:

                        employees
                }])

    }

    async function updateEmployee() {
        const employees = await db.updateEmployee();
        console.log("\n"); console.table(employees); employeeInfo();
        return inquirer
            .prompt([
                {
                    type: "list",
                    message: "Which employee do you want to update?",
                    name: "employeeInfo",
                    choices:

                        employees
                }])

    }

    async function addEmployee() {
        const employees = await db.addEmployee();
        console.log("\n"); console.table(employees); employeeInfo();
        return inquirer
            .prompt([
                {
                    type: "list",
                    message: "Which employee do you want to add?",
                    name: "employeeInfo",
                    choices:

                        employees
                }])
    }



    async function addDepartment() {
        const department = await db.addDepartment();
        console.log("\n"); console.table(department); employeeInfo();
        return inquirer
            .prompt([
                {
                    type: "list",
                    message: "Which department do you want to add?",
                    name: "employeeInfo",
                    choices:

                        employees
                }])
    }

    async function updateDepartment() {
        const department = await db.updateDepartment();
        console.log("\n"); console.table(department); employeeInfo();
        return inquirer
            .prompt([
                {
                    type: "list",
                    message: "Which department do you want to update?",
                    name: "employeeInfo",
                    choices:

                        employees
                }])
    }

    async function removeDepartment() {
        const department = await db.removeDepartment();
        console.log("\n"); console.table(department); employeeInfo();
        return inquirer
            .prompt([
                {
                    type: "list",
                    message: "Which department do you want to remove?",
                    name: "employeeInfo",
                    choices:

                        employees
                }])
    }

    async function addRole() {
        const role = await db.addRole();
        console.log("\n"); console.table(role); employeeInfo();
        return inquirer
            .prompt([
                {
                    type: "list",
                    message: "Which role do you want to add?",
                    name: "employeeInfo",
                    choices:

                        employees
                }])
    }

    async function updateRole() {
        const role = await db.updateRole();
        console.log("\n"); console.table(role); employeeInfo();
        return inquirer
            .prompt([
                {
                    type: "list",
                    message: "Which role do you want to update?",
                    name: "employeeInfo",
                    choices:

                        employees
                }])
    }

    async function removeRole() {
        const role = await db.removeRole();
        console.log("\n"); console.table(role); employeeInfo();
        return inquirer
            .prompt([
                {
                    type: "list",
                    message: "Which role do you want to remove?",
                    name: "employeeInfo",
                    choices:

                        employees
                }])
    }


    switch (data) {
        case "VIEW_ALL_EMPLOYEES":
            return viewALLEmployees();
        case "ADD_EMPLOYEE":
            return addEmployee();
        case "REMOVE_EMPLOYEE":
            return removeEmployee();
        case "UPDATE_EMPLOYEE":
            return updateEmployee();
        case "VIEW_ROLE":
            return viewRole();
        case "ADD_ROLE":
            return addRole();
        case "REMOVE_ROLE":
            return removeRole();
        case "UPDATE_ROLE":
            return updateRole();
        case "VIEW_ALL_DEPARTMENTS":
            return viewALLDepartrments();
        case "ADD_DEPARTMENT":
            return addDepartment();
        case "REMOVE_DEPARTMENT":
            return removeDepartment();
        case "UPDATE_DEPARTMENT":
            return updateDepartment();
    }
}
employeeInfo();
