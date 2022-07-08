import React from "react";
import { useTranslations } from "gatsby-plugin-translate";

const Contact = () => {
  const t = useTranslations();

  return (
    <div className="contact-container">
      <div className="content">
        <h2>{t`ENTRE EM CONTACTO`}</h2>
        <form
          className="kwes-form contact-form"
          action="https://kwesforms.com/api/foreign/forms/8K9ycaPvCF0IofGnL3jL"
        >
          <input
            className="input"
            type="text"
            name="Nome"
            placeholder={t`NOME`}
            rules="required|max:255"
          />
          <input
            className="input"
            type="email"
            name="Email"
            placeholder={t`EMAIL`}
            rules="required|email|max:255"
          />
          <input
            className="input"
            type="tel"
            name="Telefone"
            placeholder={t`TELEFONE`}
            rules="required|max:255"
          />
          <textarea
            className="textarea"
            type="text"
            name="Mensagem"
            placeholder={t`MENSAGEM`}
            rules="required|max:255"
          />
          <button className="button" type="submit">
            {t`ENVIAR`}
          </button>
        </form>
      </div>
      <div className="overlay" />
    </div>
  );
};

export default Contact;
