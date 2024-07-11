import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { GenderPage } from "./pages/categoryGender/gender";
import { HomePages } from "./pages/Home";
import { Categories } from "./pages";

import { Product } from "./pages/product";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePages />} />
        <Route path="/category" element={<Categories />} />
        {/* <Route path="/gender" element={<GenderPage />} /> */}

        <Route path="/product" element={<Product />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
