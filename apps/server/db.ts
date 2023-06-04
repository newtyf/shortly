import mysql from "mysql2/promise";

let connection: mysql.Connection;
const createConnection = async () => {
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      port: parseInt(process.env.DB_PORT as string),
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });

    console.log("*** CONNECTION STABLISHED ***");

    await connection.query(
      `CREATE TABLE IF NOT EXISTS url (
        id INT AUTO_INCREMENT,
        origUrl VARCHAR(255),
        shortUrl VARCHAR(10),
        PRIMARY KEY (id)
      );`
    );
  } catch (error) {
    console.log(error);
  }
};
createConnection();

export { connection };
