const config = require("./config");

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adam J. Arling`,
        short_name: `Adam J. Arling`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/on-stage.jpg`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Furbaby rocks`,
        short_name: `furbabyrocks`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/adam-flannel.jpg`, // This path is relative to the root of the site.
      },
    },
  ],
};
