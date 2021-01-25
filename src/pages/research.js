import * as React from "react";
import { Link } from "gatsby";

import Title from "../components/Title";
import SubTitle from "../components/SubTitle";

const mainStyle = {
  padding: "5rem 3rem 0",
};

const ClassesPage = ({ data }) => {
  const allProjects = data.allPrismicProject.edges.map((edge) => edge.node);
  return (
    <main style={mainStyle}>
      <Title>Research</Title>
      <div>
        <SubTitle>Projects</SubTitle>
        <ul>
          {allProjects.map((p, i) => (
            <li key={i}>
              <Link to={`/projects/${p.uid}`}>{p.data.title.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export const query = graphql`
  query {
    allPrismicProject {
      edges {
        node {
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }
  }
`;

export default ClassesPage;
