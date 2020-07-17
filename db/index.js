const inquirer = require("inquirer");
const connectionFile = require("./connection")

class DB {
    constructor(connectionFile) {
        this.connectionFile = connectionFile
    }
    viewEmployee(employee) {
        return this.connectionFile.query("INSERT INTO employee SET ?", employee)
    }
    addNewEmployee(employee) {
        return this.connectionFile.query("INSERT INTO employee SET ?", employee)
    }
    removeEmployee(employeeID) {
        return this.connectionFile.query("DELETE FROM employee WHERE id=?", employeeID)
    }
    updateEmployee(employeeID, roleID) {
        return this.connectionFile.query("UPDATE employee SET roleID=? WHERE id=?", [employeeID, roleID]);

    }
    viewRole(role) {
        return this.connectionFile.query("INSERT INTO role SET ?", role)
    }
    
    addNewRole(role) {
        return this.connectionFile.query("INSERT INTO role SET ?", role)
    }
    removeRole(roleID) {
        return this.connectionFile.query("DELETE FROM role WHERE id=?", roleID)
    }
    updateRole(employeeID,roleID) {
            return this.connectionFile.query("UPDATE role SET roleID=? WHERE id=?", [employeeID, roleID]);
    
    }
    viewDepartment(department) {
        return this.connectionFile.query("INSERT INTO department SET ?", department)
    }
    
    addDepartment(department) {
        return this.connectionFile.query("INSERT INTO department SET ?", department)
    }
    removeDepartment(departmentID) {
        return this.connectionFile.query("DELETE FROM department WHERE id=?", departmentID)
    }
    updateDepartment(departmentID) {
        return this.connectionFile.query("UPDATE department SET departmentID=? WHERE id=?", [departmentID]);

    }
    viewAllManager(employeeID) {
        return this.connectionFile.query("SELECT id,first_name,last_name FROM employee WHERE id ! = ? ", employeeID)
    }
    viewAllEmployees() {
        return this.connectionFile.query
            ("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;");
    }
}
    module.exports = new DB(connectionFile)
























