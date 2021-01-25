import * as React from "react";
import { Link } from "gatsby";

import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Main from "../components/Main";

const ClassesPage = ({ data }) => {
  const allProjects = data.allPrismicProject.edges.map((edge) => edge.node);
  return (
    <Main>
      <title>Research - Laura V Ferguson, PhD</title>
      <Title>Research</Title>
      <div>
        <SubTitle>Projects</SubTitle>
        <ul>
          {allProjects.map((p, i) => (
            <li key={i}>
              <Link to={`/research/projects/${p.uid}`}>
                {p.data.title.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Main>
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
