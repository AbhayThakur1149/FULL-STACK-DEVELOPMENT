import { Link } from "react-router-dom";
import { users } from "../users";

export default function UsersList() {
  return (
    <div style={{ padding: "2rem", maxWidth: "500px" }}>
      <h2>All Users</h2>

      {users.map((user) => (
        <Link
          key={user.id}
          to={`/users/${user.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", border: "1px solid #e5e7eb", borderRadius: "10px", marginBottom: "10px" }}>
            <div>
              <p style={{ margin: "0 0 2px", fontWeight: "500" }}>{user.name}</p>
              <p style={{ margin: 0, fontSize: "13px", color: "gray" }}>{user.city} · {user.posts.length} posts</p>
            </div>
            <span style={{ fontSize: "12px", color: "#9ca3af" }}>/users/{user.id} →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}