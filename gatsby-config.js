module.exports = {
  pathPrefix: process.env.PATH_PREFIX || "/",
  siteMetadata: {
    title: "Laura's website",
  },
  plugins: [
    "gatsby-plugin-layout",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Open Sans", "Poppins"],
        },
      },
    },
  ],
};
