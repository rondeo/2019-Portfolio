require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    owner: "Mohamed Sassi",
    title: "Frontend Developer & Creative UI Designer · Mohamed Sassi",
    description:
      "Mohamed Sassi is a front-end developer, UI researcher and creative designer living in Toronto, ON.",
    url: "https://www.msassi.dev",
    image: "/images/icon.png",
    twitterUsername: "@Sassi360M",
    siteUrl: "https://www.msassi.dev"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Mohamed Sassi · Frontend Developer & Creative UI Designer",
        short_name: "Sassi DEV",
        start_url: "/",
        theme_color: "#663399",
        background_color: "#663399",
        display: `standalone`,
        icon: "src/images/icon.png",
        include_favicon: true,
        legacy: true,
        crossOrigin: `use-credentials`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.msassi.dev/",
        sitemap: "https://www.msassi.dev/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }]
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
    "gatsby-plugin-twitter",
    "gatsby-plugin-sitemap"
  ]
};
