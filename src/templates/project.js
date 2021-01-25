import * as React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Main from "../components/Main";
import breakpoints from "../styled/breakpoints";

const DateSpan = styled.span`
  color: var(--bg-color);
  background: var(--tertiary-color);
  padding: 0.25rem 0.375rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 -1rem;

  @media (min-width: ${breakpoints.md}) {
    margin: 0;
  }

  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 0 1rem;
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const GalleryImage = styled.img`
  width: 100%;
  box-shadow: -3px 3px 0 var(--tertiary-color);
  border: 1px solid var(--bg-color);
`;

const ImageWrapper = styled.div`
  flex: 1 0 100%;
  padding: 0.5rem;

  @media (min-width: ${breakpoints.md}) {
    flex-basis: 33.33%;
  }

  @media (min-width: ${breakpoints.lg}) {
    flex-basis: 50%;
  }
`;

const ClassTemplate = (props) => {
  const { uid, data } = props.pageContext.data;
  const galleries =
    data.body?.filter((b) => b.slice_type === "image_gallery") ?? [];

  return (
    <Main>
      <Title>{data.title.text}</Title>
      <Row>
        <Column style={{ flex: 2 }}>
          <SubTitle>About</SubTitle>
          <RichText render={data.description.raw} />
        </Column>
        {galleries.length > 0 && (
          <Column>
            <SubTitle>Gallery</SubTitle>
            {galleries.map((g) => (
              <Gallery>
                {g.items.map((item) => (
                  <ImageWrapper>
                    <GalleryImage src={item.gallery_image.url} />
                  </ImageWrapper>
                ))}
              </Gallery>
            ))}
          </Column>
        )}
      </Row>
    </Main>
  );
};

export default ClassTemplate;
