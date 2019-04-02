import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Boxes from "./boxes";
import Checkbox from "./Checkbox";
import RightSidebar from "./RightSidebar/RightSidebar";
// Assets
import Icons from "../../Assets/MainSite/svg";

const RowInformation = [
  { Title: `Cottages`, Path: `/Cottages`, Icon: `${Icons.CottagesIcon}` },
  {
    Title: `Horse Rental`,
    Path: `/Horserental`,
    Icon: `${Icons.HorseRentalIcon}`
  },
  { Title: `Golf`, Path: `/Golf`, Icon: `${Icons.GolfIcon}` },
  { Title: `Camping`, Path: `/Camping`, Icon: `${Icons.CampingIcon}` },
  { Title: `Restaurant`, Path: `/Restaurant`, Icon: `${Icons.InfoIcon}` }
];

function Sidebar({ Position }) {
  /* State sem sér um vinstri Sidebar */
  const [isChecked, setChecked] = useState(false);
  const Show = () => {
    return setChecked(isChecked => !isChecked);
  };
  /* State sem sér um hægri Sidebar */
  const [ShowRightBar, setRightBar] = useState(false);
  const ShowMyRightMenuBar = () => {
    return setRightBar(ShowRightBar => !ShowRightBar);
  };

  return (
    <Try>
      {Position === `left` ? (
        /* Vinstra SIDEBAR */
        /* Position ræður hvort sidebar fer til vinstri eða hægri */
        <Container Position={Position} move={isChecked}>
          <HalfHeight>
            {/* Burger Menu */}
            <RowMenu>
              <TextTitle to="/"> Úthlíð </TextTitle>
              <Checkbox myFunc={Show}>
                <Line1 isChecked={isChecked} />
                <Line2 isChecked={isChecked} />
                <Line3 isChecked={isChecked} />
              </Checkbox>
            </RowMenu>
            <MainIcons>
              {/* Miðju Icons vinstra meginn */}
              {RowInformation.map(value => {
                return (
                  <Row>
                    <TextTitle> {value.Title} </TextTitle>
                    <Boxes
                      Icon={value.Icon}
                      Path={value.Path}
                      Tooltip={value.Title}
                    />
                  </Row>
                );
              })}
            </MainIcons>
          </HalfHeight>
        </Container>
      ) : (
        /* HÆGRI SIDEBAR */
        /* Position ræður hvort sidebar fer til vinstri eða hægri */
        <ContainerRight Position={Position} moveRight={ShowRightBar}>
          <HalfHeight center moveRight={ShowRightBar}>
            <Boxes
              truers={ShowRightBar}
              myFunc={ShowMyRightMenuBar}
              Icon={Icons.FacebookIcon}
              Tooltip={`Facebook`}
            />
            <Boxes
              truers={ShowRightBar}
              myFunc={ShowMyRightMenuBar}
              Icon={Icons.LocationIcon}
              Tooltip={`Location`}
            />
            <Boxes
              truers={ShowRightBar}
              myFunc={ShowMyRightMenuBar}
              Icon={Icons.InfoIcon}
              Tooltip={`Contact Info`}
            />
          </HalfHeight>
          <RightSidebar />
        </ContainerRight>
      )}
    </Try>
  );
}

export default Sidebar;

const Try = styled.div`
  width: 100%;
  position: relative;
`;

const HalfHeight = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.center ? "center" : "space-between")};
  margin: 5px auto;
  width: ${props => (props.center ? "68px" : "100%")};
`;

const MainIcons = styled.div`
  display: flex;
  height: 100%;
  margin: 4px auto;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  min-width: ${props => (props.Position === `right` ? `28vw` : `12.1vw`)};
  position: fixed;
  z-index: 500;
  margin-left: ${props => (props.move ? "0px" : "-167px")};
  margin-right: ${props => (props.moveRight ? "0px" : "-469px")};
  ${props => props.Position}: 0;
  background-color: #373737;
  flex-direction: column;
  justify-content: flex-start;
  transition: all 0.4s cubic-bezier(0.23, 0.56, 0.54, 1.01);
  border-left: ${props =>
    props.Position === `right` ? `1px solid #c0b283` : null};
  border-right: ${props =>
    props.Position === `left` ? `1px solid #c0b283` : null};
`;

const RowMenu = styled(Row)``;
const ContainerRight = styled(Container)`
  flex-direction: row;
`;

const TextTitle = styled(Link)`
  box-sizing: border-box;
  width: 80%;
  background-color: #c0b283;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin: 0px;
  margin-left: 4px;
  color: #373737;
  border: 2px solid #373737;
  text-transform: uppercase;
  font-size: 16px;

  &:hover {
    outline: none;
    color: #373737;
    text-decoration: none;
  }
`;

const Line = styled.div`
  display: block;
  height: 2px;
  width: 60%;
  background-color: #c0b283;
  position: absolute;
`;
const Line1 = styled(Line)`
  top: ${props => (props.isChecked ? "30px" : "23px")};
  left: ${props => (props.isChecked ? "10px" : "8px")};
  transition: all 0.4s ease;
  transform: ${props => (props.isChecked ? "rotateZ(-54deg)" : null)};
`;
const Line2 = styled(Line)`
  top: 30px;
  left: ${props => (props.isChecked ? "80px" : "4px")};
  opacity: ${props => (props.isChecked ? "00%" : "100%")};
  transition: all 1s ease;
`;
const Line3 = styled(Line)`
  top: ${props => (props.isChecked ? "30px" : "37px")};
  transition: all 0.4s ease;
  transform: ${props => (props.isChecked ? "rotateZ(54deg)" : null)};
  left: ${props => (props.isChecked ? "10px" : "12px")};
`;
