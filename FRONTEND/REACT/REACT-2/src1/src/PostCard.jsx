import CommentItem from "./CommentItem";

const PostCard = ({ post }) => {
  const { username, content, likes, comments } = post;

  const likesStyle = {
    fontWeight: "500",
    color: likes > 50 ? "red" : "inherit",
  };

  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: "10px", padding: "1rem", marginBottom: "1rem", background: "#fff" }}>
      <h3 style={{ margin: "0 0 6px" }}>@{username}</h3>
      <p style={{ margin: "0 0 10px" }}>{content}</p>
      <p style={{ margin: "0 0 12px", fontSize: "14px" }}>
        Likes: <span style={likesStyle}>{likes}</span>
      </p>
      <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "10px" }}>
        <p style={{ fontSize: "12px", color: "#aaa", margin: "0 0 6px" }}>Comments</p>
        {comments.map((text, index) => (
          <CommentItem key={index} text={text} />
        ))}
      </div>
    </div>
  );
};

export default PostCard;