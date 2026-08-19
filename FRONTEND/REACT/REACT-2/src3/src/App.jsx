import { Routes, Route } from "react-router-dom";
import Products from "./Products";
import CategoryPage from "./CategoryPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />}>
        <Route path="electronics" element={<CategoryPage category="electronics" />} />
        <Route path="clothing"    element={<CategoryPage category="clothing"    />} />
        <Route path="furniture"   element={<CategoryPage category="furniture"   />} />
      </Route>
    </Routes>
  );
}