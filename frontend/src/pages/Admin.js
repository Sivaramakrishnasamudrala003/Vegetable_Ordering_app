import { useEffect, useState } from "react";

function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/admin/orders")
      .then(res => res.json())
      .then(setOrders);
  }, []);

  const deliver = id => {
    fetch(`http://localhost:5000/admin/order/${id}`, { method: "PUT" })
      .then(() => window.location.reload());
  };

  return (
    <div
      className="page"
      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1518843875459-f738682238a6)" }}
    >
      <div className="card">
        <h1>Admin Panel</h1>
        {orders.map(o => (
          <div className="admin-row" key={o.id}>
            <span>{o.buyerName}</span>
            <span>{o.productName}</span>
            <span>{o.status}</span>
            {o.status === "Pending" && (
              <button onClick={() => deliver(o.id)}>Deliver</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
