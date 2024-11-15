INSERT INTO departments (name) VALUES ('Sales'), ('Engineering'), ('Finance');

INSERT INTO roles (title, salary, department_id) VALUES 
    ('Sales Manager', 60000, 1),
    ('Software Engineer', 80000, 2),
    ('Accountant', 50000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES 
    ('Alice', 'Johnson', 1, NULL),
    ('Bob', 'Smith', 2, 1),
    ('Charlie', 'Brown', 3, NULL);