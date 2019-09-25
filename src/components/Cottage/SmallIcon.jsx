import React from "react";
import styled from "styled-components";

const SmallIcon = ({ IconArray }) => (
  <Container>
    {IconArray.map((values, i) => (
      <Icon
        title={`${values.toolTip}`}
        src={values.icon}
        key={`${i}SmallIcons`}
      />
    ))}
  </Container>
);

export default SmallIcon;

const Container = styled.div`
  display: flex;
  height: 30px;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  height: 25px;
  width: 25px;
  margin: 0px 20px;
`;
