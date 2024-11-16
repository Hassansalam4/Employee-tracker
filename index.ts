import Db from ".index/db";
import inquirer from "inquirer";

const db = new Db.Database();
db.getAllemployees()
.then((res) => {
    console.log(res.rows);
})
function loadMainprompts() {
    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
            "View all employees",
            "View all employees by department",
            "View all employees by manager",
            "Add employee",
            "Remove employee",
            "Update employee role",
            "Update employee manager",
            "View all roles",
            "Add role",
            "Remove role",
            "View all departments",
            "Add department",
            "Remove department",
            "Quit",
        ],
    })
    .then((answer) => {
        switch (answer.choice) {
            case "View all employees":
                viewAllEmployees();
                break;
            case "View all employees by department":
                viewAllEmployeesByDepartment();
                break;
            case "View all employees by manager":
                viewAllEmployeesByManager();
                break;
            case "Add employee":
                addEmployee();
                break;
            case "Remove employee":
                removeEmployee();
                break;
           
            case "Update employee manager":
                updateEmployeeManager();
                break;
            case "View all roles":
                viewAllRoles();
                break;
            case "Add role":
                addRole();
                break;
            case "Remove role":
                removeRole();
                break;
            case "View all departments":
                viewAllDepartments();
                break;
            case "Add department":
                addDepartment();
                break;
            case "Remove department":
                removeDepartment();
                break;
            case "Quit":
                db.end();
                break;
        }
    })
    .then(res => {
        const choice= res.choice;
        switch (choice) {
            case "View all employees":}
};
function viewAllEmployees() {
    db.getAllemployees()
    .then((res) => {
        console.log(res.rows);
        loadMainprompts();
    });
}
function viewAllEmployeesByDepartment() {
    db.getAllemployeesByDepartment()
    .then((res) => {
        console.log(res.rows);
        loadMainprompts();
    });
    function viewAllEmployeesByManager() {
        db.getAllemployeesByManager()
        .then((res) => {
            console.log(res.rows);
            loadMainprompts();
        });
    }
    function addEmployee() {
        inquirer.prompt([
                [
                    {
                        type: "input",
                        name: "first_name",
                        message: "Enter employee's first name:",
                    },
                    {
                        type: "input",
                        name: "last_name",
                        message: "Enter employee's last name:",
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "Enter employee's email address:",
                    },
                    {
                        type: "input",
                        name: "phone",
                        message: "Enter employee's phone number:",
                    },
                    {
                        type: "input",
                        name: "address",
                        message: "Enter employee's address:",
                    },
                    {
                        type: "input",
                        name: "city",
                        message: "Enter employee's city:",
                    },
                    {
                        type: "input",
                        name: "state",
                        message: "Enter employee's state:",
                    },
                    {
                        type: "input",
                        name: "zip",
                        message: "Enter employee's zip code:",
                    },
                    {
                        type: "input",
                        name: "country",
                        message: "Enter employee's country:",
                    },
                    {
                        type: "input",
                        name: "department",
                        message: "Enter employee's department:",
                    },
                    {
                        type: "input",
                        name: "job_title",
                        message: "Enter employee's job title:",
                    },
                    {
                        type: "input",
                        name: "hire_date",
                        message: "Enter employee's hire date:",
                    },
                    {
                        type: "input",
                        name: "salary",
                        message: "Enter employee's salary:",
                    },
                    {
                        type: "input",
                        name: "manager_id",
                        message: "what is the manager name?",
                    },
                ])
                .then((answers) => {
                    db.createEmployee(resp.penname,resp,fname,resp,lname
                        .then((res) => {
                            console.log(res.rows[0]);
                        })
                    })
                }
                        