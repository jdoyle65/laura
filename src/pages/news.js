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

const GridItem = styled.div`
  &:first-child {
    grid-column: 1;
  }

  @media (min-width: ${breakpoints.md}) {
    &:first-child {
      grid-column: 1 / 3;
    }
  }
`;

const NewsPage = ({ data }) => {
  const allNews = data.allPrismicNews.edges
    .map((edge) => edge.node)
    .sort((a, b) => {
      if (a.data.is_featured && !b.data.is_featured) {
        return -1;
      }

      if (b.data.is_featured && !a.data.is_featured) {
        return 1;
      }

      if (a.data.published_at >= b.data.published_at) {
        return -1;
      } else if (a.data.published_at < b.data.published_at) {
        return 1;
      }

      return 0;
    });
  return (
    <Main>
      <title>News - Laura V Ferguson, PhD</title>
      <Title>News</Title>
      <Grid>
        {allNews.map((news, i) => (
          <GridItem key={i}>
            <Link to={`/news/${news.uid}`}>
              <ClassCard
                image={news.data.image}
                title={news.data.title.text}
                description={news.data.body}
                date={news.data.published_at}
                embedText={i === 0}
                featured={news.data.is_featured}
              />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Main>
  );
};

export const query = graphql`
  query {
    allPrismicNews {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            published_at
            is_featured
            body {
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

export default NewsPage;
