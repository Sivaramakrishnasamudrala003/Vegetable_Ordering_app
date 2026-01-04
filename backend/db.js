const sqlite3 = require("sqlite3").verbose();

// CREATE DATABASE CONNECTION
const db = new sqlite3.Database("database.db", (err) => {
  if (err) {
    console.error("Database connection failed", err);
  } else {
    console.log("SQLite database connected");
  }
});

// CREATE TABLES & INSERT DATA
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY,
      name TEXT,
      price INTEGER
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      buyerName TEXT,
      productName TEXT,
      quantity INTEGER,
      address TEXT,
      status TEXT DEFAULT 'Pending'
    )
  `);

  // INSERT PRODUCTS
  db.run(`
    INSERT OR IGNORE INTO products (id, name, price) VALUES
    (1,'Tomato',20),
    (2,'Potato',15),
    (3,'Onion',18),
    (4,'Carrot',30),
    (5,'Cabbage',25),
    (6,'Cauliflower',35),
    (7,'Apple',120),
    (8,'Banana',40),
    (9,'Orange',60),
    (10,'Grapes',90),
    (11,'Mango',150),
    (12,'Pomegranate',140)
  `);
});

// EXPORT DB
module.exports = db;
