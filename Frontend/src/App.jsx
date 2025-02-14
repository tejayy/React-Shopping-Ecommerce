import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/LoginSignup";
import ShopCatagory from "./pages/ShopCatagory";
import LoginSignup from "./pages/LoginSignup";
import men_banner from "./components/assets/banner_mens.png";
import women_banner from "./components/assets/banner_women.png";
import kids_banner from "./components/assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCatagory banner={men_banner} catagory="mens" />}
          />
          <Route
            path="/womens"
            element={<ShopCatagory banner={women_banner} catagory="womens" />}
          />
          <Route
            path="/kids"
            element={<ShopCatagory banner={kids_banner} catagory="kids " />}
          />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
