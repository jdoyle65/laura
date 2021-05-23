import * as React from "react";
import styled from "styled-components";

const Image = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;

  border-bottom: 0.25rem solid var(--complementary-color);

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
    transition: filter 100ms;
  }

  &:hover:before {
    filter: grayscale(0%);
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
    opacity: 1;
    transition: opacity 100ms;
  }

  &:hover:after {
    opacity: 0.2;
  }
`;

export default Image;
