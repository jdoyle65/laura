import * as React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { RichText } from "prismic-reactjs";

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

const DateSpan = styled.span`
  color: var(--bg-color);
  background: var(--tertiary-color);
  padding: 0.25rem 0.375rem;
  font-size: 0.875rem;
`;

const Lecture = ({ date, body }) => {
  return (
    <Wrapper>
      <DateSpan>{format(new Date(date), "PPP")}</DateSpan>
      <RichText render={body} />
    </Wrapper>
  );
};

export default Lecture;
