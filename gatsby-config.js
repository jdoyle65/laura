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
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "laura-ferguson-phd",
        // linkResolver: ({ node, key, value }) => (doc) => {
        //   // Your link resolver
        // },
        // fetchLinks: [
        //   // Your list of links
        // ],
        // htmlSerializer: ({ node, key, value }) => (
        //   type,
        //   element,
        //   content,
        //   children
        // ) => {
        //   // Your HTML serializer
        // },
        schemas: {
          home: require("./src/schemas/home.json"),
          class: require("./src/schemas/class.json"),
        },
        lang: "en-ca",
        prismicToolbar: false,
        // shouldDownloadImage: ({ node, key, value }) => {
        //   // Return true to download the image or false to skip.
        // },
        imageImgixParams: {
          auto: "compress,format",
          fit: "max",
          q: 50,
        },
        imagePlaceholderImgixParams: {
          w: 100,
          blur: 15,
          q: 50,
        },
      },
    },
  ],
};
