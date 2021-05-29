import * as React from "react";
import { Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

import Title from "../components/Title";
import Main from "../components/Main";
import breakpoints from "../styled/breakpoints";

const PeopleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const PersonCard = styled.div`
  flex: 1 0 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  background: linear-gradient(
    335deg,
    rgba(var(--tertiary-color-rgb), 0.8) 0%,
    rgba(var(--complementary-rgb), 0.25) 100%
  );

  & > img {
    width: 250px;
    height: 250px;
  }

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    &:nth-child(2n) {
      flex-direction: row-reverse;
    }
  }

  @media (min-width: ${breakpoints.xl}) {
    flex: 1 0 50%;

    &:first-child {
      & img {
        height: 400px;
        width: 400px;
      }
      flex: 1 0 100%;
    }

    &:nth-child(2n) {
      flex-direction: row;
    }
  }

  & > article {
    padding: 1rem;
    font-size: 0.875rem;
    background: white;
    height: 100%;
  }
`;

const PeoplePage = ({ data }) => {
  const people = data.prismicPeople.data.people.map(
    (p) => p.person.document.data
  );
  console.log(people);
  return (
    <Main>
      <title>Research - Laura V Ferguson, PhD</title>
      <Title>People</Title>
      <PeopleContainer>
        {people.map((p, i) => (
          <PersonCard key={i}>
            <img src={p.profile_image.url} alt={p.profile_image.alt} />
            <article>
              <h2>{p.name.text}</h2>
              <section>
                {p.attribute.map((a) => (
                  <div>
                    <strong>{a.key}</strong>: {a.value}
                  </div>
                ))}
              </section>
              {p.projects.length && (
                <section>
                  <strong>Projects: </strong>
                  {p.projects
                    .map((p) => p.project)
                    .map((p) => (
                      <Link to={`/research/projects/${p.uid}`}>
                        {p.document.data.title.text}
                      </Link>
                    ))}
                </section>
              )}
              <RichText render={p.description.raw} />
            </article>
          </PersonCard>
        ))}
      </PeopleContainer>
    </Main>
  );
};

export const query = graphql`
  query {
    prismicPeople(uid: { eq: "people" }) {
      data {
        people {
          person {
            document {
              ... on PrismicPerson {
                data {
                  projects {
                    project {
                      uid
                      document {
                        ... on PrismicProject {
                          data {
                            title {
                              text
                            }
                          }
                        }
                      }
                    }
                  }
                  name {
                    text
                  }
                  is_current
                  profile_image {
                    url
                    alt
                  }
                  attribute {
                    key
                    value
                  }
                  description {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default PeoplePage;
