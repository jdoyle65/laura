import * as React from "react";
import { Link } from "gatsby";

import Title from "../components/Title";

const mainStyle = {
  padding: "5rem 3rem 0",
};

const ClassesPage = ({ data }) => {
  const allClasses = data.prismic.allClasss.edges.map((edge) => edge.node);
  return (
    <main style={mainStyle}>
      <Title>Classes</Title>
      <ul>
        {allClasses.map((c, i) => (
          <li key={i}>
            <Link to={`/classes/${c._meta.uid}`}>
              {c.title[0].text} - {c.start_date}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export const query = graphql`
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
`;

export default ClassesPage;
