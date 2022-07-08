import React, { useState } from "react";
import GridGallery from "react-grid-gallery";
import stencil from "../../images/stencil-2.png";
import separator from "../../images/separator.png";
import { useTranslations } from "gatsby-plugin-translate";
import all, { sculptures, foundry } from "./images";

const Gallery = () => {
  const [selection, setSelection] = useState("all");
  const t = useTranslations();

  const images =
    selection === "all"
      ? all
      : selection === "sculptures"
      ? sculptures
      : foundry;

  return (
    <div className="gallery-container" id="galery">
      <img className="stencil" src={stencil} alt="stencil" />
      <img className="separator" src={separator} alt="separator" />
      <h2>{t`BRONZES BREVES`}</h2>
      <h3>{t`«O facto é que ninguém determinou, até agora, o que pode o corpo»`}</h3>
      <p>(ESPINOZA)</p>
      <div className="selectors">
        <button
          onClick={() => setSelection("foundry")}
          className={`button ${selection === "foundry" ? "selected" : ""}`}
        >
          {t`FUNDIÇÃO`}
        </button>
        <button
          onClick={() => setSelection("sculptures")}
          className={`button ${selection === "sculptures" ? "selected" : ""}`}
        >
          {t`ESCULTURAS`}
        </button>
      </div>
      <div className="gallery">
        <GridGallery images={images} enableImageSelection={false} />
      </div>
    </div>
  );
};

export default Gallery;
