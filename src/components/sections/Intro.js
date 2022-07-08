import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { LanguageSelector } from "gatsby-plugin-translate";
import { useTranslations } from "gatsby-plugin-translate";

import logo from "../../images/logo-white.png";

const Intro = () => {
  const t = useTranslations();

  return (
    <div className="intro-container">
      <img className="logo" src={logo} alt="intro" />
      <h2>{t`ESCULTURAS DE AUTOR`}</h2>
      <div className="language-selectors">
        <LanguageSelector sourceLanguage={true}>PT</LanguageSelector>
        {" | "}
        <LanguageSelector language="en">EN</LanguageSelector>
      </div>
      <button className="button" onClick={() => scrollTo("#about")}>
        {t`VISITE O SITE`}
      </button>
    </div>
  );
};

export default Intro;
