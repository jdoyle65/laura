exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      prismic {
        allClasss {
          edges {
            node {
              _meta {
                uid
              }

              title
              start_date
            }
          }
        }
      }
    }
  `);

  data.prismic.allClasss.edges.forEach((edge) => {
    const uid = edge.node._meta.uid;
    actions.createPage({
      path: `classes/${uid}`,
      component: require.resolve(`./src/templates/class.js`),
      context: { uid },
    });
  });
};
