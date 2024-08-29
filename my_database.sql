USE my_database;

INSERT INTO messages (name, email) VALUES 
('John Doe', 'john@example.com'),
('Jane Smith', 'jane@example.com'),
('Mike Brown', 'mike@example.com'),
('Emily White', 'emily@example.com'),
('Chris Green', 'chris@example.com');

UPDATE messages SET name = 'John Updated' WHERE id = 1;

DELETE FROM messages WHERE id = 3;

SELECT * FROM messages WHERE email LIKE '%@example.com';


