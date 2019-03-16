module.exports = {
  siteMetadata: {
    owner: "Mohamed Sassi",
    title: "Mohamed Sassi · Frontend Developer & Creative UI Designer",
    description:
      "Mohamed Sassi is a frontend developer, user experience researcher and creative designer living in Toronto, ON.",
    url: "https://www.msassi.dev",
    image: "/images/icon.png",
    twitterUsername: "@Sassi360M"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Mohamed Sassi · Frontend Developer & Creative UI Designer",
        short_name: "Mohamed Sassi",
        start_url: "/",
        theme_color: "#663399",
        display: `standalone`,
        icon: "src/images/icon.png",
        include_favicon: true,
        legacy: true,
        crossOrigin: `use-credentials`
      }
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
    "gatsby-plugin-twitter"
  ]
};
