import { useState } from "react";

function Track() {
  const [id, setId] = useState("");
  const [order, setOrder] = useState(null);

  const track = () => {
    fetch(`http://localhost:5000/order/${id}`)
      .then(res => res.json())
      .then(setOrder);
  };

  return (
    <div
      className="page"
      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1502741338009-cac2772e18bc)" }}
    >
      <div className="card">
        <h1>Track Order</h1>
        <input placeholder="Order ID" onChange={e => setId(e.target.value)} />
        <button onClick={track}>Track</button>
        {order && <h3>Status: {order.status}</h3>}
      </div>
    </div>
  );
}

export default Track;
