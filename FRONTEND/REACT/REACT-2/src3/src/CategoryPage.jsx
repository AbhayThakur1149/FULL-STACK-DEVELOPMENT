const productsData = {
  electronics: [
    { id: 1, name: "Laptop",     price: "₹80,000" },
    { id: 2, name: "Smartphone", price: "₹60,000" },
    { id: 3, name: "Headphones", price: "₹3,000"  },
  ],
  clothing: [
    { id: 4, name: "T-Shirt",    price: "₹500"    },
    { id: 5, name: "Jeans",      price: "₹1,200"  },
    { id: 6, name: "Jacket",     price: "₹4,500"  },
  ],
  furniture: [
    { id: 7, name: "Sofa",       price: "₹25,000" },
    { id: 8, name: "Desk",       price: "₹8,000"  },
    { id: 9, name: "Bookshelf",  price: "₹3,500"  },
  ],
};

export default function CategoryPage({ category }) {
  const items = productsData[category];

  return (
    <div>
      <h2 style={{ textTransform: "capitalize", marginBottom: "1rem" }}>{category}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "12px" }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{ border: "1px solid #e5e7eb", borderRadius: "10px", padding: "1rem" }}
          >
            <p style={{ margin: "0 0 4px", fontWeight: "500" }}>{item.name}</p>
            <p style={{ margin: 0, color: "gray" }}>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}