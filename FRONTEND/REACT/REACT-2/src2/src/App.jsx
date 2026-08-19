import ProfileCard from "./ProfileCard";

export default function App() {
  return (
    <div style={{ display: "flex", gap: "1rem", padding: "2rem", flexWrap: "wrap" }}>
      <ProfileCard name="Alice"  age={23} isOnline={true}  />
      <ProfileCard name="Bob"    age={21} isOnline={false} />
      <ProfileCard name="Carlos" age={25} isOnline={true}  />
    </div>
  );
}