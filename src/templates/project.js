import * as React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import breakpoints from "../styled/breakpoints";

const mainStyle = {
  padding: "5rem 3rem 0",
};

const DateSpan = styled.span`
  color: var(--bg-color);
  background: var(--tertiary-color);
  padding: 0.25rem 0.375rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 -1rem;

  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 1rem;
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
    <main style={mainStyle}>
      <Title>{data.title.text}</Title>
      <Row>
        <Column style={{ flex: 2 }}>
          <SubTitle>About</SubTitle>
          <RichText render={data.description.raw} />
        </Column>
        {galleries.length > 0 && (
          <Column>
            <SubTitle>Images</SubTitle>
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
    </main>
  );
};

export default ClassTemplate;
