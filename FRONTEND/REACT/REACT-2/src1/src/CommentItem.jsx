const CommentItem = ({ text }) => (
  <div style={{
    background: "#f3f4f6",
    borderRadius: "6px",
    padding: "6px 10px",
    fontSize: "13px",
    color: "#555",
    marginBottom: "4px"
  }}>
    {text}
  </div>
);

export default CommentItem;