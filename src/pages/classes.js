import * as React from "react";
import { Link } from "gatsby";

import Title from "../components/Title";
import Main from "../components/Main";

const ClassesPage = ({ data }) => {
  const allClasses = data.allPrismicClass.edges.map((edge) => edge.node);
  return (
    <Main>
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
    </Main>
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
