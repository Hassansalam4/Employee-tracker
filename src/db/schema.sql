CREATE DATABASE employee_tracker;






-- Departments Table
CREATE TABLE departments (
    id SERIAL PRIMARY KEY,NOT NULL
  first_name  VARCHAR(50) NOT NULL
    last_name VARCHAR(50) NOT NULL
    pen_name VARCHAR(50) NOT NULL
);

-- Roles Table
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER REFERENCES departments(id)
);

-- Employees Table
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INTEGER REFERENCES roles(id),
    manager_id INTEGER REFERENCES employees(id)
);
