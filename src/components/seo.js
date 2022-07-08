import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import image from "../images/socials.jpg";

function SEO({
  description,
  lang,
  meta,
  keywords = [
    "bronze",
    "esculturas",
    "sculptures",
    "foundry",
    "museum",
    "museu",
    "museu de arte",
    "museu de arte moderna",
    "galeria",
    "galeria de arte",
    "galeria de arte moderna",
    "art gallery",
    "art gallery modern",
    "arte",
    "arte moderna",
    "isabel",
    "andrade",
    "isabel de andrade",
    "sculpture",
    "art",
    "art modern",
    "paper",
    "human",
    "creative",
    "arte contemporanea",
    "criatividade",
    "criatividade humana",
    "porto",
    "portugal",
  ],
  title,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            script={[
              {
                src: "https://kwesforms.com/v2/kwes-script.js",
                defer: true,
              },
            ]}
            link={[
              {
                rel: "stylesheet",
                href:
                  "https://fonts.googleapis.com/css?family=Raleway:400,700,300",
                type: "text/css",
              },
              {
                rel: "stylesheet",
                href:
                  "https://fonts.googleapis.com/css?family=Open+Sans:400,700,300",
                type: "text/css",
              },
              {
                rel: "stylesheet",
                href:
                  "https://fonts.googleapis.com/css2?family=Tangerine&display=swap",
                type: "text/css",
              },
              {
                rel: "stylesheet",
                href:
                  "https://fonts.googleapis.com/css2?family=Montserrat:200,400",
                type: "text/css",
              },
            ]}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                name: "image",
                content: image,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: "og:image",
                content: image,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: "twitter:image",
                content: image,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: "theme-color",
                content: "#c99f6c",
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
