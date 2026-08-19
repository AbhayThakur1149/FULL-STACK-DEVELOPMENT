import { NavLink, Outlet } from "react-router-dom";

const categories = ["electronics", "clothing", "furniture"];

export default function Products() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* Sidebar */}
      <aside style={{ width: "180px", borderRight: "1px solid #e5e7eb", padding: "1.5rem 1rem" }}>
        <p style={{ fontWeight: "500", marginBottom: "1rem" }}>Categories</p>

        <NavLink
          to="/products"
          end
          style={({ isActive }) => ({ display: "block", padding: "8px 10px", borderRadius: "8px", marginBottom: "4px", color: isActive ? "#1d4ed8" : "inherit", background: isActive ? "#eff6ff" : "transparent", textDecoration: "none" })}
        >
          All Products
        </NavLink>

        {categories.map((cat) => (
          <NavLink
            key={cat}
            to={`/products/${cat}`}
            style={({ isActive }) => ({ display: "block", padding: "8px 10px", borderRadius: "8px", marginBottom: "4px", textTransform: "capitalize", color: isActive ? "#1d4ed8" : "inherit", background: isActive ? "#eff6ff" : "transparent", textDecoration: "none" })}
          >
            {cat}
          </NavLink>
        ))}
      </aside>

      {/* Content area — child routes render here */}
      <main style={{ flex: 1, padding: "1.5rem" }}>
        <Outlet />
      </main>
    </div>
  );
}