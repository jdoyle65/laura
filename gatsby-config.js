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
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "laura-ferguson-phd",
        defaultLang: "en-ca",
        // accessToken: "...", // optional
        // prismicRef: "...", // optional, default: master; useful for A/B experiments
        // path: "/preview", // optional, default: /preview
        previews: false, // optional, default: false
        // pages: [
        //   {
        //     // optional
        //     type: "class", // TypeName from prismic
        //     match: "/classes/:uid", // pages will be generated under this pattern
        //     // previewPath: "/article", // optional path for unpublished documents
        //     component: require.resolve("./src/templates/class.js"),
        //     // sortBy: "date_ASC", // optional, default: meta_lastPublicationDate_ASC; useful for pagination
        //   },
        // ],
        // extraPageFields: "article_type", // optional, extends pages query to pass extra fields
        // sharpKeys: [
        //   /image|photo|picture/, // (default)
        //   "profilepic",
        // ],
      },
    },
  ],
};
