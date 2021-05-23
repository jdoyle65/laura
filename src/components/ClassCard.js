import * as React from "react";
import styled from "styled-components";
import { RichText } from "prismic-reactjs";
import { format } from "date-fns";

import CardImage from "./CardImage";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const EmbeddedText = styled.div`
  position: relative;
  z-index: 1;
  padding: 0.5rem 1rem;
  color: white;
  background: rgba(80, 80, 80, 0.8);
`;

const FeaturedText = styled.span`
  position: absolute;
  top: 1rem;
  left: 0;
  color: var(--bg-color);
  background: var(--tertiary-color);
  padding: 0.25rem 0.375rem;
  font-size: 1rem;
  z-index: 1;
`;

const ClassCard = ({
  title,
  description,
  date,
  image = {},
  embedText = false,
  featured = false,
  grayscale = false,
}) => {
  return (
    <Wrapper>
      {featured && <FeaturedText>Top-News</FeaturedText>}
      {embedText && (
        <CardImage url={image.url} grayscale={grayscale}>
          <EmbeddedText>
            {date && <small>{format(new Date(date), "PPP")}</small>}
            <h3>{title}</h3>
            {description && <RichText render={description.raw} />}
          </EmbeddedText>
        </CardImage>
      )}
      {!embedText && (
        <React.Fragment>
          <CardImage url={image.url} grayscale={grayscale} />
          {date && <small>{format(new Date(date), "PPP")}</small>}
          <h3>{title}</h3>
          {description && <RichText render={description.raw} />}
        </React.Fragment>
      )}
    </Wrapper>
  );
};

export default ClassCard;
