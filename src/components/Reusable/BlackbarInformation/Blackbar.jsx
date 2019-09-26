import React from "react";
import styled from "styled-components";

// Assets
import { Colors, Media } from "../../../Assets/Variables/";

/*
  Fáum Info frá BlackbarInformation í gegnum props. Í Info eru Iconin og tölurnar sem að við þurfum að sýna fyrir sumarbústaðina.
  Ferðin sem að Info fer: Assets -> SinglePageCottage -> BlackbarInfo -> Blackbar.jsx.
*/

const Blackbar = ({
  BlackbarInfo,
  Svartastika,
  horseInformation,
  Cottages,
  English
}) => (
  <Container horseInformation={horseInformation}>
    {!horseInformation
      ? English || Cottages
        ? BlackbarInfo.map((values, index) => (
            <Row key={`${index}blackbarInformation`}>
              <Icon alt={`${values.ToolTip}`} src={values.Icon} />
              {console.log(values)}
              <Text>{values.Text}</Text>
            </Row>
          ))
        : Svartastika.map((values, index)  => (
          <Row key={`${index}blackbarInformation`}>
              <Icon alt={`${values.ToolTip}`} src={values.Icon} />
              <Text>{values.Text}</Text>
            </Row>
          ))
      : null}
  </Container>
);
export default Blackbar;

const Container = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  background-color: ${props =>
    props.horseInformation ? "transparent" : `${Colors.BLACK}`};
  justify-content: space-evenly;
  ${Media.phone`display: none;`};
`;

const Row = styled.div`
  display: flex;
  width: 120px;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  color: white;
`;

const Icon = styled.img`
  display: flex;
  height: 35px;
  width: 35px;
  fill: white;
  color: white;
`;

const Text = styled.h5`
  font-size: 25px;
  margin: 0px auto;
  padding: 0px;
  font-weight: 100;
`;
