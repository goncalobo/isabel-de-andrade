import React from "react";
import { useTranslations } from "gatsby-plugin-translate";

const Footer = () => {
  const t = useTranslations();

  return (
    <div className="footer">
      <div>
        {t`Todas as esculturas e respetivas fotografias são da autoria e pertencem a Isabel de Andrade. A prévia autorização do seu uso deve ser solicitada através do contacto`}
        <b> esculturas@isabeldeandrade.com</b>
        <br />
        <br />© 2022
      </div>
    </div>
  );
};

export default Footer;
