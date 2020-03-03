module.exports = {
  siteMetadata: {
    title: "Projects Overview",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentstack",
      options: {
        api_key: "bltbf2e36fcd6e6f372",
        delivery_token: "cs0eaa9d44e9ab8e14c3dc65ce",
        environment: "acceptance",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
  ],
}
