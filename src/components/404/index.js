import React from "react";
import styled from "styled-components";

import { Layout, Button } from "../Reusable/";
import { Colors, Media } from "../../Assets/Variables";

import LanguageContext from "../../Context/Language";

const NoMatch = () => {

    const {English } = React.useContext(LanguageContext);
  return (
    <Layout>
      <Container>
        <Text>
          <H1>{English ? "Ooops!" : "Úpsa deisý!"}</H1>
          <H4> {English ? "We didn't find this site!" : "Við fundum ekki síðuna!"}</H4>
          <Span style={{ color: `${Colors.GOLD}` }}>&#9785;</Span>
          <Button toPath="/" backgroundcolor={`${Colors.GOLD}`}>
            {English ? "To Home Page" : "Á Upphafssíðu"}
        </Button>
        </Text>

      </Container>
    </Layout>
  );
};

export default NoMatch;

const Container = styled.div`
  position: relative;
  background-color: ${Colors.BLACK};
  width: 100%;
  height: 100vh;
`;

const Text = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 500px; /* Need a specific value to work */
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${Media.tablet`
        width: 100%;
        height: 100%;
  `}
`;
const H1 = styled.h1`
  color: ${Colors.GOLD};

  ${Media.tablet`
        font-size: 20px;

  `}
`;

const H4 = styled.h4`
  color: ${Colors.GOLD};
  ${Media.tablet`
        font-size: 15px;
  `}
`;

const Span = styled.span`
  content: "\2639";
  fill: ${Colors.GOLD};
  font-size: 200px;

  ${Media.tablet`
        font-size: 50px;
  `}
`;
