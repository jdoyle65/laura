import * as React from "react";
import styled from "styled-components";
import { RichText } from "prismic-reactjs";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;

  border-bottom: 0.5rem solid var(--complementary-color);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.url});
    background-size: cover;
    filter: grayscale(100%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      335deg,
      rgba(var(--tertiary-color-rgb), 0.8) 0%,
      rgba(var(--complementary-rgb), 0.25) 100%
    );
  }
`;

const ClassCard = ({ title, description, image = {} }) => {
  return (
    <Wrapper>
      <Image url={image.url} />
      <h2>{title}</h2>
      {description && <RichText render={description.raw} />}
    </Wrapper>
  );
};

export default ClassCard;
