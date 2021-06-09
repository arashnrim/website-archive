module.exports = {
  siteMetadata: {
    title: "ArashNrIm",
    description: "A digital portfolio for Arash Nur Iman.",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ArashNrIm`,
        short_name: `ArashNrIm`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
  flags: {
    DEV_SSR: false,
  },
};
