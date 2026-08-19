import { useParams, Link } from "react-router-dom";
import { users } from "../users";

export default function UserProfile() {
  const { id } = useParams();

  // useParams always returns a string — convert to number for comparison
  const user = users.find((u) => u.id === Number(id));

  // Edge case: invalid ID
  if (!user) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>User not found</h2>
        <p style={{ color: "gray" }}>No user with ID {id} exists.</p>
        <Link to="/users">← Back to Users</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "500px" }}>
      <Link to="/users" style={{ fontSize: "13px" }}>← Back to Users</Link>

      {/* Profile header */}
      <div style={{ margin: "1.25rem 0" }}>
        <h2 style={{ margin: "0 0 4px" }}>{user.name}</h2>
        <p style={{ margin: "0 0 2px", color: "gray" }}>{user.email}</p>
        <p style={{ margin: 0, fontSize: "12px", color: "#9ca3af", fontFamily: "monospace" }}>ID: {user.id}</p>
      </div>

      {/* Posts */}
      <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "1rem" }}>
        <h4 style={{ margin: "0 0 10px" }}>Posts ({user.posts.length})</h4>
        {user.posts.map((post, index) => (
          <div
            key={index}
            style={{ padding: "10px 14px", background: "#f9fafb", borderRadius: "8px", marginBottom: "8px", fontSize: "14px" }}
          >
            {post}
          </div>
        ))}
      </div>
    </div>
  );
}