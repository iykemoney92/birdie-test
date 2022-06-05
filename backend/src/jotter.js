const mysql = require("mysql2");
const db = mysql.createConnection({
    host: "birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com",
    user: "test-read",
    password: "xnxPp6QfZbCYkY8",
    database: "birdietest"
});
//console.log(process.argv);
//db.query(process.argv[2], (err, result) => console.log([err, result]));

db.query("SELECT * FROM events WHERE care_recipient_id='df50cac5-293c-490d-a06c-ee26796f850d' AND (timestamp BETWEEN '2018-01-21T00:00:00.000Z' AND '2019-01-21T00:00:00.000Z')  ORDER BY timestamp DESC LIMIT 10",
    (err, result) => console.log(result));