import * as React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import { format } from "date-fns";

import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Main from "../components/Main";
import breakpoints from "../styled/breakpoints";
import Lecture from "../components/Lecture";

const mainStyle = {
  padding: "5rem 3rem 0",
};

const DateSpan = styled.span`
  color: var(--bg-color);
  background: var(--tertiary-color);
  padding: 0.25rem 0.375rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 -1rem;

  @media (min-width: ${breakpoints.md}) {
    margin: 0;
  }

  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 0 1rem;
`;

const ClassTemplate = (props) => {
  const { uid, data } = props.pageContext.data;
  const lectures = data.lectures;

  return (
    <Main>
      <Title>{data.title.text}</Title>
      <p>
        <DateSpan>{format(new Date(data.start_date), "PPP")}</DateSpan>
      </p>
      <Row>
        <Column style={{ flex: 2 }}>
          <SubTitle>About</SubTitle>
          <RichText render={data.description.raw} />
        </Column>
        {lectures && lectures.length > 0 && (
          <Column>
            <SubTitle>Lectures</SubTitle>
            <div style={{ margin: "1rem" }}>
              {lectures.map((l) => (
                <Lecture
                  date={l.lecture_date}
                  body={l.lecture_description.raw}
                />
              ))}
            </div>
          </Column>
        )}
      </Row>
    </Main>
  );
};

export default ClassTemplate;
