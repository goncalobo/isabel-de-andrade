import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { useTranslations } from "gatsby-plugin-translate";

import stencil from "../../images/stencil-1.png";
import separator from "../../images/separator.png";

const About = () => {
  const t = useTranslations();

  return (
    <div className="about-container" id="about">
      <img className="stencil" src={stencil} alt="stencil" />
      <img className="separator" src={separator} alt="separator" />
      <h3>{t`Sobre a minha`}</h3>
      <h2>{t`ESCULTURA`}</h2>
      <p className="testimonial">
      &nbsp;&nbsp;&nbsp;&nbsp;
      "{t`A sua escultura aborda sobretudo o corpo humano, não exactamente de uma forma realista, mas antes numa estética depurada e elegante, com uma linguagem simples e poética, mostrando composições onde a leveza e posição das figuras mostram a preocupação pela exactidão e por padrões de beleza ao mesmo tempo clássicos e contemporâneos. Quando um gesto se prolonga, é um infinito que se expande e na suavidade com que os braços prolongados nas mãos nos conduz para o espaço que se vai distanciando, percebemos a ambiguidade do slowmotion. É como se algo nos encaminhasse para fora, mas querendo manter a magia do mundo interior que fica agarrado aos corpos. Isso deixa-nos suspensos. O que faz apaixonarmo-nos pelos personagens – chamemos-lhe assim, uma vez que cada peça «fala», ainda que em linguagem gestual – tem muito a ver com a sensibilidade que a escultora consegue colocar-lhes. Todo este conjunto fala, toca e dança. Nós assistimos a uma coreografia onde elas falam e se movimentam por si mesmas. As esculturas têm a sua própria vida. Podemos pedir melhor concerto à arte?`}"
      </p>
      <p className="author">
        (JOSÉ PEDRO M. FERNANDES - {t`DOUTORADO EM FILOSOFIA`})
      </p>
      <p className="testimonial" style={{ display: "none" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;"...me encanta cómo unes fragilidad y fuerza,lo
        terrenal con lo elegante...La estilización depuradísima con el culo en
        la tierrra.Al gunas me parecen ramitas encontradas en la orillla ,a las
        que has dado la vuelta y dotado de alma."
        <span className="author" style={{ display: "none" }}>
          (Beli C. Toscano , Pintora)
        </span>
      </p>
      <button className="button" onClick={() => scrollTo("#galery")}>
        {t`Ver galeria de esculturas`}
      </button>
    </div>
  );
};

export default About;
