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
          twitterUsername,
          owner,
          keyword,
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
          <Helmet title={seo.title} defer={false}>
            <html lang="en" />
            <link rel="canonical" href={`${siteUrl}`} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en" />
            <meta property="og:site_name" content={seo.title} />
            <meta property="og:image" content={seo.image} />
            <meta name="author" content={owner} />
            <meta name="keywords" content={keyword}/>
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
