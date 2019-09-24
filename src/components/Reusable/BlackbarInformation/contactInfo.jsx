import React from "react";
import styled from "styled-components";

const ContactInfo = ({ English }) => (
  <EmailColumn>
    <EmailContainer>
      <EmailText>{English ? "Email" : "Netfang"}</EmailText>
      <EmailText fat>uthlid@uthlid.is</EmailText>
    </EmailContainer>
    <EmailContainer>
      <EmailText>{English ? "Phone" : "Sími"} </EmailText>
      <EmailText fat>+354 699 5500</EmailText>
    </EmailContainer>
  </EmailColumn>
);

export default ContactInfo;

const EmailColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
const EmailText = styled.h3`
  font-size: 20px;
  letter-spacing: -1px;
  font-weight: 100;
  display: flex;
  text-transform: uppercase;
  margin: 0px 20px;
  text-transform: none;
  font-weight: ${props => (props.fat ? `900` : `100`)};
  white-space: nowrap;
`;

const EmailContainer = styled.div`
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
`;
