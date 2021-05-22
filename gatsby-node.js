exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allPrismicClass {
        edges {
          node {
            uid
            data {
              title {
                text
              }
              display_dates
              start_date
              description {
                raw
              }
              lectures {
                lecture_date
                lecture_description {
                  raw
                }
              }
            }
          }
        }
      }

      allPrismicProject {
        edges {
          node {
            uid
            data {
              title {
                text
              }
              body {
                ... on PrismicProjectBodyImageGallery {
                  id
                  slice_type
                  items {
                    gallery_image {
                      url
                      alt
                    }
                    image_captions {
                      raw
                    }
                  }
                }
              }
              description {
                raw
              }
            }
          }
        }
      }
    }
  `);

  console.log(data);
  data.allPrismicClass.edges.forEach((edge) => {
    const uid = edge.node.uid;
    actions.createPage({
      path: `classes/${uid}`,
      component: require.resolve(`./src/templates/class.js`),
      context: { data: edge.node },
    });
  });

  data.allPrismicProject.edges.forEach((edge) => {
    const uid = edge.node.uid;
    actions.createPage({
      path: `research/projects/${uid}`,
      component: require.resolve("./src/templates/project.js"),
      context: { data: edge.node },
    });
  });
};
