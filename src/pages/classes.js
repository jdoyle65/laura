import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

import Title from "../components/Title";
import Main from "../components/Main";
import ClassCard from "../components/ClassCard";

import breakpoints from "../styled/breakpoints";

const Grid = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${breakpoints.xl}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const Link = styled(GatsbyLink)`
  color: var(--primary-color);
  text-decoration: none;
`;

const ClassesPage = ({ data }) => {
  const allClasses = data.allPrismicClass.edges.map((edge) => edge.node);
  return (
    <Main>
      <title>Classes - Laura V Ferguson, PhD</title>
      <Title>Classes</Title>
      <Grid>
        {allClasses.map((c, i) => (
          <div key={i}>
            <Link to={`/classes/${c.uid}`}>
              <ClassCard
                image={c.data.image}
                title={c.data.title.text}
                description={c.data.short_description}
                grayscale={true}
              />
            </Link>
          </div>
        ))}
      </Grid>
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
            short_description {
              raw
            }
            image {
              url
              alt
            }
          }
        }
      }
    }
  }
`;

export default ClassesPage;
