import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {} from "./pages/Home";
import { HomePages, ProductPage, Categories } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/:gender" element={<ProductPage />} />
        <Route path="/:gender/:category" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
