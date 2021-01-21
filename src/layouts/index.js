import * as React from "react";
import { createGlobalStyle } from "styled-components";

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
    --tertiary-color: #7cbdf2;
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
`;

const items = [
  {
    label: "Home",
    href: "/",
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
    {children}
  </React.Fragment>
);

export default Layout;
