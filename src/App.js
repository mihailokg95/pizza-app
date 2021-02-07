import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { productData, productData1 } from "./components/Products/data";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Most Wanted" data={productData} />
      <Feature />
      <Products heading="Deserts" data={productData1} />
      <Footer />
    </Router>
  );
}

export default App;
