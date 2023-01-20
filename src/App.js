import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Categories from "./pages/Categories";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Product from "./components/Product";

function App() {
  useEffect(() => {
    const allA = document.querySelectorAll("a");
    for (let i = 0; i < allA.length; i++) {
      allA[i].addEventListener('click', function(){
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0; 
      })
    }
  }, []);
  
  return (
    
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/singleProduct:id" element={<SingleProduct />} />
          <Route path="*" element={<ErrorPage />} />


          <Route path="/product/:proId" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
