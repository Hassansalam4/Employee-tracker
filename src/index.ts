import { Pool } from "connection.js";
import { QueryResult } from "pg";

export default class DB {
    constructor(){
}

async query(query: string, values: any[]): Promise<QueryResult> {
    const pool = new Pool();
    const client = await pool.connect();
    try {
        return await client.query(query, values);
    } finally {
        client.release();

     
    }
}
    // get all employees
    getAllemployees() {
        return this.query("SELECT id,pen_name FROM employees",
             );}
    }
}

c// Create a new employee
createEmployee(
    pen_name: string,
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    state: string,
    zip: string,
    country: string,
    department: string,
    job_title: string,
    hire_date: string,
    salary: number,
    manager_id: number | null
) {
    const query = `
        INSERT INTO employees 
        (pen_name, first_name, last_name, email, phone, address, city, state, zip, country, department, job_title, hire_date, salary, manager_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
        RETURNING *;  -- Return the newly inserted employee
    `;

    const values = [
        pen_name, first_name, last_name, email, phone, address, city, state, zip, country, department, job_title, hire_date, salary, manager_id
    ];

    try {
        const result = await this.query(query, values);
        return result.rows[0];  // Return the first (and only) row from the query result
    } catch (error) {
        console.error("Error creating employee:", error);
        throw error;  // Rethrow the error to be handled by the caller
    }
}// delete an employee
deleteEmployee(id: number) {


    return this.query
    (
        "DELETE FROM employees WHERE id = $1 RETURNING *;",);
}

// get all roles
getAllRoles() {
    return this.query("SELECT id, title, salary FROM roles;");
}

// create a new role
createRole(title: string, salary: number, department_id: number) {
  return this.query(
    "INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *;",
    [title, salary, department_id]
  );
}
// delete a role
deleteRole(id: number) {
  return this.query("DELETE FROM roles WHERE id = $1 RETURNING *;", [id]);
}

// get all departments
gwetAllDepartments() {
    return this.query("SELECT id, name FROM departments;");
}

// create a new department
createDepartment(name: string) {
    return this.query("INSERT INTO departments (name) VALUES ($1) RETURNING *;", [name]);
    insert into departments (name) values ('HR');
}
// delete a department
deleteDepartment(id: number) {
    return this.query("DELETE FROM departments WHERE id = $1 RETURNING *;", [id]);
}