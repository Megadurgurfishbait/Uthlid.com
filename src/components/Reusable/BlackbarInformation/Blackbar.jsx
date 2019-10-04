import React from "react";
import styled from "styled-components";

// Assets
import { Colors, Media } from "../../../Assets/Variables/";

import {ButtonAnchor} from "../Button";
/*
  Fáum Info frá BlackbarInformation í gegnum props. Í Info eru Iconin og tölurnar sem að við þurfum að sýna fyrir sumarbústaðina.
  Ferðin sem að Info fer: Assets -> SinglePageCottage -> BlackbarInfo -> Blackbar.jsx.
*/

const Blackbar = ({
  BlackbarInfo,
  Svartastika,
  horseInformation,
  Cottages,
  English,
  showInformation
}) => (
  <Container horseInformation={horseInformation}>
    {!horseInformation
      ? English || Cottages
        ? BlackbarInfo.map((values, index) => (
            <Row key={`${index}blackbarInformation`}>
              <Icon alt={`${values.ToolTip}`} src={values.Icon} />
              <Text>{values.Text}</Text>
            </Row>
          ))
        : Svartastika.map((values, index) => (
            <Row key={`${index}blackbarInformation`}>
              <Icon alt={`${values.ToolTip}`} src={values.Icon} />
              <Text>{values.Text}</Text>
            </Row>
          ))
      : null}
    {showInformation && (
      <Button
        href="https://property.godo.is/booking.php?propid=12862"
        isExternal
        backgroundcolor={Colors.GOLD}
        background={false}
        noBorder={true}
      >
        {English ? `Book Now` : "Bóka núna"}
      </Button>
    )}
  </Container>
);
export default Blackbar;

const Container = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  align-items: center;
  border-radius: 50px;
  overflow: hidden;
  background-color: ${props =>
    props.horseInformation ? "transparent" : `${Colors.BLACK}`};
  justify-content: space-between;
  ${Media.phone`display: none;`};
  color: ${Colors.BLACK};
`;

const Button = styled(ButtonAnchor)`
  max-height: 100%; 
  min-width: 150px;
  box-sizing: border-box;
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
  border: 5px solid transparent;
  border-left: none;
  transition: border .3s linear;

  &:hover {
    border: 5px solid ${Colors.BLACK};
    border-left: none;
  }
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  color: white;

  &:first-child {
    padding-left: 10px;
  }
`;

const Icon = styled.img`
  display: flex;
  min-height: 50px;
  min-width: 50px;
  max-height: 50px;
  max-width: 50px;
  fill: white;
  color: white;
`;

const Text = styled.h5`
  font-size: 25px;
  margin: 0px 5px;
  padding: 0px;
  white-space: nowrap;
  font-weight: 100;
`;
