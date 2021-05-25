import * as React from "react";
import styled from "styled-components";
import breakpoints from "../styled/breakpoints";

const Main = styled.main`
  padding: 0 1rem 0;
  margin: 0 auto;
  max-width: 99rem;

  @media (min-width: ${breakpoints.md}) {
    padding: 0 3rem 0;
  }
`;

export default Main;
