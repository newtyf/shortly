import mysql from "mysql2/promise";

let connection: mysql.Connection;
const createConnection = async () => {
  try {
    connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      port: 3309,
      password: "mysecretpassword",
      database: "shortly",
    });

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
