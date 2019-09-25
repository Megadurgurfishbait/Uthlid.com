import React from "react";
import styled from "styled-components";
// Components
// Assets
import { Colors, Media } from "../../../Assets/Variables/";

const Facebook = ({English}) =>  (
  <Container>
    <a href="https://www.facebook.com/Uthlid-Iceland-Cottages-312270718970655/">
      {English ? `Find us on Facebook`:` Finndu okkur á Facebook`} 
    </a>
  </Container>
);

export default Facebook;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  background-color: inherit;
  text-decoration: none;
  & > a {
    color: ${Colors.GOLD};
    ${Media.tablet`font-size: 17px;`}
  }
`;
