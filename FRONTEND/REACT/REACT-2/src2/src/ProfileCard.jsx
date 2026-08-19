const ProfileCard = ({ name, age, isOnline }) => {
  const statusStyle = {
    color: isOnline ? "green" : "gray",
    fontWeight: "500",
    fontSize: "13px",
  };

  return (
    <div style={{
      border: "1px solid #e5e7eb",
      borderRadius: "12px",
      padding: "1.25rem",
      width: "180px",
      textAlign: "center",
      background: "#fff",
    }}>
      <h3 style={{ margin: "0 0 4px" }}>{name}</h3>
      <p style={{ margin: "0 0 8px", color: "#6b7280", fontSize: "14px" }}>Age: {age}</p>
      <span style={statusStyle}>{isOnline ? "online" : "offline"}</span>
    </div>
  );
};

export default ProfileCard;