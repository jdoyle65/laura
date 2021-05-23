import * as React from "react";
import styled from "styled-components";
import { RichText } from "prismic-reactjs";

import CardImage from "./CardImage";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClassCard = ({ title, description, image = {} }) => {
  return (
    <Wrapper>
      <CardImage url={image.url} />
      <h2>{title}</h2>
      {description && <RichText render={description.raw} />}
    </Wrapper>
  );
};

export default ClassCard;
