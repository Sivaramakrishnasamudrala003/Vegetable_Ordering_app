import { useEffect, useState } from "react";

/* RELIABLE IMAGE MAP */
const productImages = {
  tomato:
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",

  onion:
    "https://images.pexels.com/photos/144206/pexels-photo-144206.jpeg?cs=srgb&dl=pexels-padrinan-144206.jpg&fm=jpg",

  carrot:
    "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/4/25/3/shutterstock_440493100_5-second-Studio_carrots.jpg.rend.hgtvcom.1280.853.suffix/1524688181811.jpeg",

  cauliflower:
    "https://sites.udel.edu/chs-udfoodlab/files/2016/03/cauliflower-1ahsm9d.jpg",

  banana:
    "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",

  orange:
    "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",

  potato:
    "https://healthyfamilyproject.com/wp-content/uploads/2020/05/Potatoes-background.jpg",

  cabbage:
    "https://upload.wikimedia.org/wikipedia/commons/6/6f/Cabbage_and_cross_section_on_white.jpg",

  apple:
    "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",

  grapes:
    "https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg",

  mango:
    "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg",

  pomegranate:
    "https://wallpaperaccess.com/full/1971409.jpg"
};


/* FALLBACK IMAGE */
const fallbackImage =
  "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=800&q=80";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="page">
      <h1>Fresh Fruits & Vegetables</h1>

      <div className="products">
        {products.map(p => {
          const key = p.name.toLowerCase(); // ✅ SAFE NORMALIZATION

          return (
            <div className="product-card" key={p.id}>
              <img
                src={productImages[key] || fallbackImage}
                alt={p.name}
                loading="lazy"
                onError={(e) => {
                  e.target.src = fallbackImage;
                }}
              />

              <div className="product-info">
                <h3>{p.name}</h3>
                <p>₹ {p.price} / kg</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
