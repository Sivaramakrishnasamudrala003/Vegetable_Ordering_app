const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/products", (req, res) => {
  db.all("SELECT * FROM products", [], (err, rows) => {
    res.json(rows);
  });
});

app.post("/order", (req, res) => {
  const { buyerName, productName, quantity, address } = req.body;
  db.run(
    `INSERT INTO orders (buyerName, productName, quantity, address) VALUES (?, ?, ?, ?)`,
    [buyerName, productName, quantity, address],
    function () {
      res.json({ orderId: this.lastID });
    }
  );
});

app.get("/order/:id", (req, res) => {
  db.get("SELECT * FROM orders WHERE id=?", [req.params.id], (err, row) => {
    res.json(row);
  });
});

app.get("/admin/orders", (req, res) => {
  db.all("SELECT * FROM orders", [], (err, rows) => {
    res.json(rows);
  });
});

app.put("/admin/order/:id", (req, res) => {
  db.run(
    "UPDATE orders SET status='Delivered' WHERE id=?",
    [req.params.id],
    () => res.json({ message: "Updated" })
  );
});

app.listen(5000, () => console.log("Backend running on port 5000"));
