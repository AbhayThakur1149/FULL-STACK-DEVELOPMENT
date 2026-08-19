import { Routes, Route, Navigate } from "react-router-dom";
import UsersList   from "./Products";
import UserProfile from "./UserProfile";

export default function App() {
  return (
    <Routes>
      <Route path="/"            element={<Navigate to="/users" />} />
      <Route path="/users"       element={<UsersList />} />
      <Route path="/users/:id"   element={<UserProfile />} />
    </Routes>
  );
}