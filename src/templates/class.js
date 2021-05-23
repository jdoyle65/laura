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

const BannerImage = styled.div`
  position: relative;
  z-index: 0;
  margin: -1rem -3rem 0;
  padding: 1rem 3rem 3rem;

  & * {
    position: relative;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.url});
    background-size: cover;
    filter: grayscale(100%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      335deg,
      rgba(var(--tertiary-color-rgb), 0.8) 0%,
      rgba(var(--complementary-rgb), 0.25) 100%
    );
    filter: brightness(20%);
  }
`;

const ClassTemplate = (props) => {
  const { uid, data } = props.pageContext.data;
  const { lectures, display_dates = false, image } = data;
  console.log(image);

  return (
    <Main>
      <title style={{ zIndex: 1 }}>
        {data.title.text} - Laura V Ferguson, PhD
      </title>
      <BannerImage url={image.url}>
        <Title color={"var(--bg-color)"}>{data.title.text}</Title>
        {display_dates && (
          <p>
            <DateSpan>{format(new Date(data.start_date), "PPP")}</DateSpan>
          </p>
        )}
      </BannerImage>
      <Row>
        <Column style={{ flex: 2 }}>
          <SubTitle>About</SubTitle>
          <RichText render={data.description.raw} />
        </Column>
        {lectures && lectures.length > 0 && (
          <Column>
            <SubTitle>Lectures</SubTitle>
            <div style={{ margin: "1rem" }}>
              {lectures.map((l, i) => (
                <Lecture
                  date={l.lecture_date}
                  body={l.lecture_description.raw}
                  index={i}
                  showDate={display_dates}
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
