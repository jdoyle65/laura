import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";

// Components
import Nav from "../components/Nav";

import "normalize.css";

const GlobalStyle = createGlobalStyle`
  :root {
    /* Fonts */
    --body-font: "Open Sans", sans-serif;
    --heading-font: "Poppins", sans-serif;

    /* Colors */
    --primary-color: #212f3c;
    --primary-rgb: 	33, 47, 60;
    --secondary-color: #c2e0f9;
    --secondary-color-rgb: 194, 224, 249;
    --tertiary-color: #7cbdf2;
    --tertiary-color-rgb: 124, 189, 242;
    --complementary-color: #c77cf2;
    --complementary-rgb: 199, 124, 242;
    --bg-color: #fbfcfc;

    /* Motion */
    --fast-motion: 75ms;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    font-family: var(--body-font);
    color: var(--primary-color);
    background: var(--bg-color);
    line-height: 1.2;
  }

  p {
    line-height: 1.5;
  }
`;

const Wrapper = styled.div`
  margin-top: 4rem;
`;

const items = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "News",
    href: "/news",
  },
  {
    label: "Research",
    href: "/research",
  },
  {
    label: "Classes",
    href: "/classes",
  },
];

const Layout = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    <Nav items={items} />
    <Wrapper>{children}</Wrapper>
  </React.Fragment>
);

export default Layout;
