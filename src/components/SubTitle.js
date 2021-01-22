import * as React from "react";
import styled from "styled-components";

import emphasis from "../styled/emphasis";

const Heading = emphasis(
  styled.h3`
    font-size: 1.5rem;
  `,
  { highlightAlpha: 0.5 }
);
const Wrapper = styled.div`
  display: inline-block;
  margin: 1rem 0;
`;

export default ({ children }) => (
  <Wrapper>
    <Heading>{children}</Heading>
  </Wrapper>
);
