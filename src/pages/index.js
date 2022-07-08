import React from "react";
import SEO from "../components/seo";
import Intro from "../components/sections/Intro";
import About from "../components/sections/About";
import Bio from "../components/sections/Bio";
import Gallery from "../components/sections/Gallery";
import Paper from "../components/sections/Paper";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import Video from "../components/video";
import scrollTo from "gatsby-plugin-smoothscroll";
import { useTranslateContext } from "gatsby-plugin-translate";

// Assets
import logo from "../images/logo-white.png";
import shop from "../images/shop.svg";

// Styles
import "../styles/main.css";

const IndexPage = () => {
  const { language } = useTranslateContext();

  return (
    <div className="home" id="home">
      <img
        className="fixed-logo"
        src={logo}
        alt="Isabel de Andrade"
        onClick={() => scrollTo("#home")}
      />
      <a
        href={language !== "pt" ? `/${language}/shop` : "/shop"}
        className="fixed-shop-icon"
      >
        <img src={shop} alt="Go to shop" />
      </a>
      <SEO title="Isabel de Andrade | Esculturas" />
      <Video />
      <Intro />
      <About />
      <Bio />
      <Gallery />
      <Paper />
      <Contact />
      <Footer />
    </div>
  );
};

export default IndexPage;
