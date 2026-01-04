import { useState } from "react";

function Order() {
  const [form, setForm] = useState({});

  const submit = () => {
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(d => alert("Order ID: " + d.orderId));
  };

  return (
    <div
      className="page"
      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1506806732259-39c2d0268443)" }}
    >
      <div className="card">
        <h1>Place Bulk Order</h1>
        <input placeholder="Buyer Name" onChange={e => setForm({ ...form, buyerName: e.target.value })} />
        <input placeholder="Product Name" onChange={e => setForm({ ...form, productName: e.target.value })} />
        <input placeholder="Quantity (kg)" onChange={e => setForm({ ...form, quantity: e.target.value })} />
        <input placeholder="Delivery Address" onChange={e => setForm({ ...form, address: e.target.value })} />
        <button onClick={submit}>Submit Order</button>
      </div>
    </div>
  );
}

export default Order;
