module.exports = {
  siteMetadata: {
    title: 'Mohamed Sassi Portfolio',
    author: 'Mohamed Sassi',
    description:
      'Frontend Developer & Creative UI Designer Involving with latest web designing and technologies',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
