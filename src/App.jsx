import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Categories } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/category" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
