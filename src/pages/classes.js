import * as React from "react";
import { Link } from "gatsby";

import Title from "../components/Title";

const mainStyle = {
  padding: "5rem 3rem 0",
};

const ClassesPage = ({ data }) => {
  const allClasses = data.allPrismicClass.edges.map((edge) => edge.node);
  return (
    <main style={mainStyle}>
      <Title>Classes</Title>
      <ul>
        {allClasses.map((c, i) => (
          <li key={i}>
            <Link to={`/classes/${c.uid}`}>
              {c.data.title.text} - {c.data.start_date}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export const query = graphql`
  query {
    allPrismicClass {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            start_date
          }
        }
      }
    }
  }
`;

export default ClassesPage;
