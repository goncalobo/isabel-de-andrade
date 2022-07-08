import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../../styles/react-modal-video.css";
import stencil from "../../images/stencil-3.png";
import separator from "../../images/separator.png";
import { useTranslations } from "gatsby-plugin-translate";

const Paper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  return (
    <div className="paper-container" id="about">
      <img className="stencil" src={stencil} alt="stencil" />
      <img className="separator" src={separator} alt="separator" />
      <h3>{t`Trabalho em papel`}</h3>
      <h2>SEBASTIÃO</h2>
      <div className="play-button-wrapper" onClick={() => setIsOpen(true)}>
        <div className="play-button-border">
          <div className="play-button-icon">▶</div>
        </div>
      </div>
      <a
        href="http://sebastiaobuba.blogspot.com/"
        target="_blank"
        rel="noreferrer"
      >
        <button className="button">{t`VISITE O BLOG`}</button>
      </a>
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen}
        videoId="124766499"
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default Paper;
