import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Twitter from "./twitter";

const SEO = ({
  title = null,
  description = null,
  image = null,
  pathname = null
}) => (
  <StaticQuery
    query={graphql`
      query SEOQuery {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl: url
            defaultImage: image
            twitterUsername
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername
        }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || "/"}`
      };

      return (
        <>
          <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
          </Helmet>
          <Twitter
            username={twitterUsername}
            title={seo.title}
            description={seo.description}
            image={seo.image}
          />
        </>
      );
    }}
  />
);

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string
};

export default SEO;
