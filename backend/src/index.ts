import Fastify from "fastify";
import sqlite3 from "sqlite3";

const fastify = Fastify({ logger: true });

const db = new sqlite3.Database("database.db");

const execute = async (
	db: sqlite3.Database,
	sql: string,
) => {
	return new Promise<void>((resolve, reject) => {
		db.exec(sql, (err: any) => {
			if (err) reject(err);
			resolve();
		});
	});
};


const init = async () => {
  const db = new sqlite3.Database("database.db");
  try {
    await execute(
      db,
      `CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        price DECIMAL(10, 2) NOT NULL)`
    );
  } catch (error) {
    console.log(error);
  } finally {
    db.close();
  }
};

init()
