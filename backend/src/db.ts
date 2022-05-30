import { createConnection } from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();

export const db = createConnection({
    host: "birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com",
    user: "test-read",
    password: "xnxPp6QfZbCYkY8",
    database: "birdietest"
})