import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePages } from "./pages/Home";
import { Categories, ProductPage, ProductDetail } from "./pages";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/:gender" element={<ProductPage />} />
        <Route path="/:category/:gender" element={<ProductPage />} />
        <Route path="/productDetail/:product_id" element={<ProductDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
