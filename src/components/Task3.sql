SELECT dept_id, COUNT(dept_id) AS dept_quantity, SUM(salary) AS salary_sum FROM employee GROUP BY dept_id;

SELECT
    id,
    NAME,
    money,
    dept_id,
STATUS
FROM
    customer_table
ORDER BY CASE WHEN
STATUS
    = 'yes' THEN id
END desc LIMIT 3;