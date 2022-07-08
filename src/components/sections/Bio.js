import React, { useState } from "react";
import BaseSwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useTranslations } from "gatsby-plugin-translate";
import profile from "../../images/isabeldeandrade.jpg";

const SwipeableViews = autoPlay(BaseSwipeableViews);

const Events = () => {
  const [index, setIndex] = useState(0);
  const t = useTranslations();

  return (
    <SwipeableViews
      enableMouseEvents
      index={index}
      onChangeIndex={setIndex}
      threshold={5}
    >
      <div className="event">
        <div>
          {t`Novembro`} 2016 – «Habeas Corpus», Exposição Individual | Casa
          Barbot, Casa da Cultura, Vila Nova de Gaia
        </div>
      </div>
      <div className="event">
        <div>
          {t`Novembro`} 2016 – «Jardins da Memória», Exposição Colectiva |
          Centro de Cultura e Congressos da Ordem dos Médicos, Porto
        </div>
      </div>
      <div className="event">
        <div>
          {t`Novembro`} 2016 – «Onda Bienal em Barcelos», Exposição Colectiva |
          Galeria Municipal de Barcelos, Barcelos
        </div>
      </div>
      <div className="event">
        <div>
          {t`Outubro`} 2016 – «Oitenta Anos, Oitenta Representações de José
          Rodrigues», Exposição Colectiva | Fundação Escultor José Rodrigues,
          Porto
        </div>
      </div>
      <div className="event">
        <div>
          {t`Outubro`} 2016 – «A Arte Portuguesa no Feminino», Exposição
          Colectiva | Galeria Arte- Imagem, La Coruña, Galicia, Espanha
        </div>
      </div>
      <div className="event">
        <div>
          {t`Setembro`} 2016 – «Artistas Actuais de Portugal para Futuro Museu
          de Arte Contemporânea de Ovar», Exposição Colectiva | Galeria Espaço
          entre Artes, Ovar
        </div>
      </div>
      <div className="event">
        <div>
          {t`Julho`} 2016 – «Consonâncias», Exposição Individual como artista
          convidada da SIPO, Galeria Barbacan, Óbidos
        </div>
      </div>
      <div className="event">
        <div>
          {t`Julho`} 2016 – «Bocanada de Aire», Exposição Conjunta com a pintora
          Beli Toscano | Centro Cultural Casa Grande, Ayamonte, Huelva, Espanha
        </div>
      </div>
      <div className="event">
        <div>
          {t`Junho`} 2016 – «A Amostra», Exposição Colectiva | Galeria Geraldes,
          Porto
        </div>
      </div>
      <div className="event">
        <div>
          {t`Junho`} 2016 – «Onda Bienal em Gondomar», Exposição Colectiva
          |Auditório Municipal de Gondomar, Gondomar
        </div>
      </div>
      <div className="event">
        <div>
          {t`Maio`} 2016 – «Harmonia Iluminada», Exposição Colectiva | Fundação
          Narciso Ferreira, Riba D’Ave, Braga
        </div>
      </div>
      <div className="event">
        <div>
          {t`Abril`} 2016 – «Solidarte», Exposição Colectiva | Casa das Artes,
          Porto
        </div>
      </div>
      <div className="event">
        <div>
          {t`Fevereiro`} 2016 – «Traço no Feminino», Exposição Colectiva |
          Galeria Hecoarte, Esposende
        </div>
      </div>
      <div className="event">
        <div>
          {t`Fevereiro`} 2016 – «Simplesmente Vinho», Mostra Colectiva de Arte |
          Mosteiro de Monchique, Porto
        </div>
      </div>
      <div className="event">
        <div>
          {t`Dezembro`} 2015 - Exposição Colectiva MB527 Espaço de Arte REM,
          Miguel Bombarda, Porto
        </div>
      </div>
      <div className="event">
        <div>
          {t`Dezembro`} 2015 - Exposição Colectiva 5º Aniv. Galeria Quadras
          Soltas, Miguel Bombarda, Porto
        </div>
      </div>
      <div className="event">
        <div>
          {t`Julho`} 2015 - Exposição Colectiva Sócios da Coop. Artística
          Árvore, Museu Soares dos Reis, Porto
        </div>
      </div>
      <div className="event">
        <div>
          {t`Junho`} 2015 - Exposição Internacional «A Poética do Visual»
          Galeria da Capitania do Porto de Aveiro, Aveiro{" "}
        </div>
      </div>
      <div className="event">
        <div>
          {t`Junho`} 2015 - Exposição Internacional «7x7» DaVinci Gallery,
          Miguel Bombarda, Porto
        </div>
      </div>
      <div className="event">
        <div>
          {t`Maio`} 2015 - Instalação «Outro Jardim Possível e Perdido» Casa
          Museu MOS, Porto
        </div>
      </div>
      <div className="event">
        <div>
          {t`Outubro`} 2015 - Exposição «Lufada de Ar» Fundação PT, Porto
        </div>
      </div>
      <div className="event">
        <div>
          {t`Fevereiro`} 2015 - Exposição Colectiva «Complementaridades» Espaço
          Q | Quadras Soltas, Miguel Bombarda, Porto
        </div>
      </div>
      <div className="event">
        <div>
          {t`Dezembro`} 2014 - Exposição Colectiva de Natal, Espaço REM, Miguel
          Bombarda, Porto
        </div>
      </div>
      <div className="event">
        <div>
          {t`Novembro`} 2014 - Exposição Colectiva «Van.DOMA» no âmbito do
          Projecto DOMA, Douro Marina, Gaia
        </div>
      </div>
      <div className="event">
        <div>
          {t`Julho`} 2014 - Exposição Colectiva de Verão, Espaço REM, Miguel
          Bombarda, Porto
        </div>
      </div>
      <div className="event">
        <div>
          {t`Julho`} 2012 - Instalação «Seres alados em busca da flor» Casa
          Museu MOS, Porto
        </div>
      </div>
      <div className="event">
        <div>
          {t`Maio`} 2012 - Exposição Individual «Reflexões contemporâneas sobre
          a pintura de Aurélia de Sousa» Casa Museu MOS, Porto
        </div>
      </div>
      <div className="event">
        <div>
          {t`Março`} 2012 - Exposição Individual «Encontro» Galeria ASVS
          arquitectos reunidos, Porto
        </div>
      </div>
      <div className="event">
        <div>
          {t`Novembro`} 2010 - Exposição Individual «Figuras em Flor» Bobogi
          Espaço de Arte, Aveiro
        </div>
      </div>
      <div className="event">
        <div>
          {t`Outubro`} 2009 - Exposição Individual «Figuras em Flor» Artemísia-
          Porto
        </div>
      </div>
      <div className="event">
        <div>
          {t`Abril`} 2009 - Instalação «Primavera» Atelier CoisasAssim,
          Matosinhos
        </div>
      </div>
    </SwipeableViews>
  );
};

const Bio = () => {
  const t = useTranslations();

  return (
    <div className="bio-container">
      <div className="content">
        <div className="left">
          <img className="image" src={profile} alt="Isabel de Andrade" />
        </div>
        <div className="right">
          <h4>
            Isabel de Andrade <span className="cursive">{t`artísta plástica`}</span>
          </h4>
          <h5>
            <span className="serif">{t`escultura em bronze e em papel`}</span>
          </h5>
          <p className="bio">
            {t`Isabel de Andrade nasceu em 1960 em Luanda, Angola, onde viveu a infância e parte da adolescência. Actualmente vive e trabalha no Porto. As suas obras são em bronze e também em papel, numa técnica particular que tem vindo a desenvolver ao longo do tempo. Tem dinamizado diversas Oficinas de artes plásticas em paralelo à sua produção artística. Tem realizado exposições, individuais e colectivas, dedicando-se também à instalação.`}
          </p>
        </div>
      </div>
      <div className="events">
        <Events />
      </div>
      <div className="overlay" />
    </div>
  );
};

export default Bio;
