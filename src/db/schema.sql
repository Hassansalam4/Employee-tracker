-- Insert departments
INSERT INTO departments (name) VALUES 
    ('Sales'), 
    ('Engineering'), 
    ('Finance');

-- Insert roles
INSERT INTO roles (title, salary, department_id) VALUES 
    ('Sales Manager', 60000, 1),
    ('Software Engineer', 80000, 2),
    ('Accountant', 50000, 3);

-- Insert employees
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES 
    ('Hassan', 'John', 1, NULL),
    ('Ali', 'Usman', 2, 1),
    ('Charlie', 'Brown', 3, NULL);