import * as React from "react";
import styled from "styled-components";

// images
import splash from "../images/splash.jpg";

const mainStyle = {
  padding: "4rem 1.5rem 0",
  color: "var(--bg-color)",
  height: "100vh",
};

const Splash = styled.div`
  position: relative;
  background: url(${splash});
  background-size: cover;
  background-color: var(--primary-color);
  color: var(--bg-color);
  height: 100%;
  padding: 6rem 3rem 2rem;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 33.33%;
    height: 100%;
    background: var(--primary-color);
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 66.66%;
    height: 100%;
    background: rgba(33, 47, 60, 0.5);
  }
`;

const HeadingTop = styled.h2`
  display: inline;
  font-family: "Poppins", sans-serif;
  color: var(--bg-color);
  font-size: 4rem;
  position: relative;
  z-index: 1;
  background-image: linear-gradient(
    to top,
    rgba(199, 124, 242, 0.7) 40%,
    transparent 40%
  );
  margin: 1rem 0;
`;
const HeadingBottom = styled.h1`
  display: inline;
  font-family: "Poppins", sans-serif;
  color: var(--bg-color);
  font-size: 6rem;
  position: relative;
  z-index: 1;
  background-image: linear-gradient(
    to top,
    rgba(199, 124, 242, 0.7) 40%,
    transparent 40%
  );
  margin: 1rem 0;
`;

const Paragraph = styled.p`
  line-height: 1.5;
  margin-top: 5rem;
  max-width: 32rem;
  position: relative;
  z-index: 1;
`;

const Polygon = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 8rem;
  width: 33.33%;
  background: var(--secondary-color);
  clip-path: polygon(0 0, 100% 45%, 100% 100%, 0 100%);
`;

const IndexPage = () => {
  return (
    <main style={mainStyle}>
      <title>Home - Laura V Ferguson, PhD</title>

      <Splash>
        <HeadingTop>Laura V</HeadingTop>
        <br />
        <HeadingBottom>Ferguson, PhD</HeadingBottom>
        <Paragraph>
          I am a wicked good researcher. Trust me, I am the coolest that you
          will ever meet. I’ll do cool science with you, and when we’re done I’m
          pretty sure you’ll say “Wow! That was super fun science and I can’t
          wait to do another project with Laura V Ferguson!”
        </Paragraph>
        <Polygon />
      </Splash>
    </main>
  );
};

export default IndexPage;
