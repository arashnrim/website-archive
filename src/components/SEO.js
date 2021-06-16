import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ pageName }) => {
  const { site } = useStaticQuery(query);

  const { siteTitle, siteDescription, siteUrl } = site.siteMetadata;

  const seo = {
    name: pageName,
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
  };

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <title>
        {seo.name} — {seo.title}
      </title>
      <meta name="description" content={seo.description} />
      <meta name="canonical" content="https://arashnrim.me" />
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteTitle: title
        siteDescription: description
      }
    }
  }
`;
