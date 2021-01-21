import * as React from "react";
import styled from "styled-components";

// Styles
import emphasis from "../styled/emphasis";
import breakpoints from "../styled/breakpoints";

// Components
import HeadingOne from "../components/HeadingOne";
import HeadingTwo from "../components/HeadingTwo";

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
  background-position: right;
  color: var(--bg-color);
  height: 100%;
  padding: 6rem 3rem 2rem;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primary-color);

    @media (min-width: ${breakpoints.md}) {
      width: 50%;
    }

    @media (min-width: ${breakpoints.lg}) {
      width: 33.33%;
    }
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    background: rgba(33, 47, 60, 0.5);

    @media (min-width: ${breakpoints.md}) {
      width: 50%;
    }

    @media (min-width: ${breakpoints.lg}) {
      width: 66.66%;
    }
  }
`;

const heading = (el) => styled(emphasis(el))`
  color: var(--bg-color);
  position: relative;
  z-index: 1;
  margin: 1rem 0;
`;

const HeadingTop = styled(heading(HeadingTwo))`
  font-size: 3rem;

  @media (min-width: ${breakpoints.md}) {
    font-size: 4rem;
  }
`;
const HeadingBottom = styled(heading(HeadingOne))`
  font-size: 3rem;

  @media (min-width: ${breakpoints.md}) {
    font-size: 5rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 6rem;
  }
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
  width: 100%;
  background: var(--secondary-color);
  clip-path: polygon(0 0, 100% 45%, 100% 100%, 0 100%);

  @media (min-width: ${breakpoints.md}) {
    width: 50%;
  }

  @media (min-width: ${breakpoints.lg}) {
    width: 33.33%;
  }
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
