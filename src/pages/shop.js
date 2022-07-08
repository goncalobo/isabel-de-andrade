import React from "react";
import SEO from "../components/seo";
import Products from "../components/Products/Products";
import { LanguageSelector } from "gatsby-plugin-translate";

// Assets
import logo from "../images/logo-white.png";

// Styles
import "../styles/shop.css";

const Shop = () => (
  <div className="shop">
    <div className="language-selectors">
      <LanguageSelector sourceLanguage={true}>PT</LanguageSelector>
      <LanguageSelector language="en">EN</LanguageSelector>
    </div>
    <SEO title="Isabel de Andrade | Esculturas | Loja" />
    <img className="top-logo" src={logo} alt="Isabel de Andrade" />
    <Products />
    <div className="overlay" />
  </div>
);

export default Shop;
