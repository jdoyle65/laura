import * as React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import { format } from "date-fns";

import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
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

  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 1rem;
`;

const ClassTemplate = ({ data }) => {
  const myClass = data.prismic.class;

  const lectures = [
    { date: "2021-01-18", body: "This is the first class" },
    { date: "2021-01-20", body: "this is the second class" },
  ];

  return (
    <main style={mainStyle}>
      <Title>{RichText.asText(myClass.title)}</Title>
      <p>
        <DateSpan>{format(new Date(myClass.start_date), "PPP")}</DateSpan>
      </p>
      <Row>
        <Column>
          <SubTitle>About</SubTitle>
          <RichText render={myClass.description} />
        </Column>
        <Column>
          <SubTitle>Lectures</SubTitle>
          <div style={{ margin: "1rem" }}>
            {lectures.map((l) => (
              <Lecture date={l.date} body={l.body} />
            ))}
          </div>
        </Column>
      </Row>
    </main>
  );
};

export const query = graphql`
  query Class($uid: String!) {
    prismic {
      class(uid: $uid, lang: "en-ca") {
        title
        start_date
        description
      }
    }
  }
`;

export default ClassTemplate;
