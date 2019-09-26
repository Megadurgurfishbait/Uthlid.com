import React from "react";
import styled from "styled-components";
// Components
// Assets
import { Colors, Media } from "../../../Assets/Variables/";
import { Icon, FBIcon } from "../../../Assets/Sidebar/";

const Facebook = ({ English }) => (
  <Container>
    <FacebookContainer>
      <TopContainer>
        <IconContainer>
          <RoundedItem />
        </IconContainer>

        <HeaderContainer>
          <a href="https://www.facebook.com/Uthlid-Iceland-Cottages-312270718970655/">
            Uthlid Iceland Cottages
          </a>
        </HeaderContainer>
      </TopContainer>

      <BottomContainer>
        <a href="https://www.facebook.com/Uthlid-Iceland-Cottages-312270718970655/">
          {English ? `Find us on Facebook` : ` Finndu okkur á Facebook`}
        </a>
      </BottomContainer>
    </FacebookContainer>
  </Container>
);

export default Facebook;

const Anchor = () => {
  return `
  font-size: 10px;
  color: Black;
  font-weight: 700;
  text-decoration: none;
  background-color: #C2BFB5;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid black;
  `;
};

const RoundedItem = styled.div`
  background: url(${Icon});
  height: 90%;
  width: 90%;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid white;
`;

const TopContainer = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  margin: 0px;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 20%;
  margin: 0px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px 5px;
  height: 100%;
  width: 80%;

  & > a {
    color: white;
    font-size: 14px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const BottomContainer = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
  text-decoration: none;
  margin: 5px 5px;

  & > a {
    ${Anchor};
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  text-decoration: none;
  color: white;
  & > a {
    color: ${Colors.GOLD};
    ${Media.tablet`font-size: 17px;`}
  }
`;

const FacebookContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100px;
  background: url(${FBIcon});
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: inset 0px 0px 5px 0px rgba(255, 255, 255, 0.25);
`;
