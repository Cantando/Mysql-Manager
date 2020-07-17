USE Employee_Tracker;

INSERT INTO department
    (name)
VALUES
    ("sales"),
    ("engineering"),
    ("finance"),
    ("legal");

INSERT into role
    (title, salary, department_id)
VALUES
    ("Sales Manager", 100000, 1),
    ("Sales person", 50000, 1),
    ("Senior Engineer", 150000, 2),
    ("Engineer", 900000, 2),
    ("Finance Manager", 120000, 3),
    ("Senior Finance Consultant", 95000, 3),
    ("Junior Finance Consultant ", 65000, 3),
    ("Legal Manager", 300000, 4),
    ("Head Lawyer", 180000, 4),
    ("Junior Lawyer", 120000, 4);

INSERT into employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Johnny B.", "Atkinson", 1, null),
    ("Susan ", "Ash", 2, 1),
    ("David", "Linda", 2, 1),
    ("Roger", "Tim", 3, null),
    ("Paola", "Sam", 4, 3),
    ("Cathy", "Dana", 4, 3),
    ("Cole", "Chris", 4, 3),
    ("Sam", "Fred", 5, null),
    ("Paul", "Frank", 6, 5),
    ("Larry", "Tom", 7, 5),
    ("Harry", "Seth", 7, 5),
    ("Frank", "Nate", 8, 5),
    ("Bianca", "Bree", 9, null);



