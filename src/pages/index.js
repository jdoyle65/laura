import * as React from "react";
import styled from "styled-components";
import { RichText } from "prismic-reactjs";
import { Helmet } from "react-helmet";

// Styles
import emphasis from "../styled/emphasis";
import breakpoints from "../styled/breakpoints";

// Components
import HeadingOne from "../components/HeadingOne";
import HeadingTwo from "../components/HeadingTwo";

// images
import splash from "../images/splash.jpg";
import { graphql } from "gatsby";

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

const Paragraph = styled.div`
  line-height: 1.5;
  margin-top: 1rem;
  max-width: 32rem;
  position: relative;
  z-index: 1;

  @media (min-width: ${breakpoints.md}) {
    margin-top: 2rem;
  }
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

const ProfileImage = styled.img`
  position: relative;
  z-index: 1;
  border-radius: 50%;
  border: solid 2px rgba(var(--complementary-rgb), 0.6);
  width: 6rem;
  height: 6rem;

  @media (min-width: ${breakpoints.md}) {
    width: 10rem;
    height: 10rem;
  }
`;

const IndexPage = ({ data }) => {
  const home = data.prismicHome.data;

  return (
    <main style={mainStyle}>
      <Helmet>
        <title>Home - Laura V Ferguson, PhD</title>
        <meta property="og:url" content="" />
        <meta property="og:title" content="Laura V Ferguson, PhD" />
        <meta property="og:description" content={home.body.text} />
        <meta property="og:image" content={home.profile_image.url} />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="" />
        <meta name="twitter:title" content="Laura V Ferguson, PhD" />
        <meta name="twitter:description" content={home.body.text} />
        <meta name="twitter:image" content={home.profile_image.url} />
      </Helmet>

      <Splash>
        <HeadingTop>{home.top_heading.text}</HeadingTop>
        <br />
        <HeadingBottom>{home.bottom_heading.text}</HeadingBottom>
        <br />
        <ProfileImage src={home.profile_image.url} />
        <Paragraph>
          <RichText render={home.body.raw} />
        </Paragraph>
        <Polygon />
      </Splash>
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    prismicHome(uid: { eq: "home" }) {
      data {
        top_heading {
          text
        }
        bottom_heading {
          text
        }
        body {
          raw
          text
        }
        profile_image {
          url
          alt
        }
      }
    }
  }
`;
