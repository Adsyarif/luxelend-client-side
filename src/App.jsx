import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { GenderPage } from "./pages/categoryGender/gender";
import { HomePages } from "./pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePages />} />
                {/* <Route path="/gender" element={<GenderPage />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
