import { config } from "dotenv";
import { createPool } from "mysql2/promise";
config();

const pool = createPool({
   port: process.env.MYSQL_PORT,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSOWRD,
    database: process.env.MYSQL_DATABASE_NAME,
})

const connectToDatabase = async ()=> {
    try {
        await pool.getConnection()
        console.log("Database Connected Successfull");
    } catch (error) {
        console.log("Database Connected Error");
        console.log(error);
        throw error;
    }
}

export {connectToDatabase, pool}