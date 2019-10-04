import React, { useState } from "react";
import styled from "styled-components";

// Component
import {
  Header,
  BlackbarInformation,
  Layout,
  TextIncludes,
  SEO
} from "../Reusable";
import {ButtonAnchor} from '../Reusable/Button';
// Assets
import { Values_Object_EN, Values_Object_IS } from "../../Assets/Cottages/";
import Media from "../../Assets/Variables/media";
import LanguageContext from "../../Context/Language";
import getWindowDimensions from "../../Hooks/useWindowDimensions";
import NoMatch from "../404";
import { Colors } from "../../Assets/Variables";
// CottageInfoOjbect inniheldur upplýsingar um alla sumarbústaðina.
// Síðan fyrir hvern og einn sumarbúsað.
const SinglePageCottage = ({ match }) => {
  const { English } = React.useContext(LanguageContext);
  let hello = Values_Object_EN[match.params.id.toLowerCase()];
  if (hello === undefined) {
    return <NoMatch />;
  }
  const [Information, setInformation] = useState(
    English
      ? Values_Object_EN[match.params.id.toLowerCase()]
      : Values_Object_IS[match.params.id.toLowerCase()]
  );

  React.useEffect(() => {
    English
      ? setInformation(Values_Object_EN[match.params.id.toLowerCase()])
      : setInformation(Values_Object_IS[match.params.id.toLowerCase()]);
  }, [English]);
  const [size] = React.useState(getWindowDimensions());
  return (
    <Layout stop="true">
      <SEO
        title={`${Information.Title}`}
        keywords={`${Information.Includes.toString()}`}
        description={`${Information.TextInformation[0].Text}`}
      />
      <Header
        Border
        CoverPhoto={
          size.width > 700
            ? Information.CoverPhoto
            : Information.CoverPhoto_mobile
        }
      />

      {size.width < 700 &&
        <Button
        href="https://property.godo.is/booking.php?propid=12862"
        isExternal
        backgroundcolor={Colors.GOLD}
        background={false}
        >{English ? `Book Now` : `Bóka núna`}</Button>
      }

      {/* Sendi niður upplýsingarnar í gegnum props. */}
      <BlackbarInformation
        horseInformation={false}
        showInformation={true}
        {...Information}
        Cottages={true}
      />

      <Container>
        <Textbox>
          {Information.TextInformation.map((values, index) => (
            <Text key={`${index}informationTextboxes`}>
              <TextTitle>{values.Title}</TextTitle>
              <TextParagraph>{values.Text}</TextParagraph>
            </Text>
          ))}
        </Textbox>
      </Container>
      <TextIncludes Includes={Information.Includes} />
    </Layout>
  );
};
export default SinglePageCottage;

const Textbox = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  flex-direction: column;
  margin-left: 20px;
  ${Media.desktop`
    width: 100%;
  `};
`;

const Button = styled(ButtonAnchor)`
  height: 60px;
  min-width: 120px;
  margin: -32px auto;
  color: ${Colors.BLACK};
  border-radius: 50px;
  box-shadow: 0px 9px 10px -7px rgba(0,0,0,0.35);
  border: none;
  font-weight: bolder;
  letter-spacing: 2px;
  &:hover {
    color: ${Colors.GOLD};
    cursor: pointer;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  margin: 80px auto;
`;

const Text = styled.div`
  margin: 1px auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  ${Media.phone`
    width: 100%;
    margin: 0px;

  `};
`;
const TextTitle = styled.h3`
  ${Media.phone`
      width: 95%;
      text-align: center;
    `};
`;

const TextParagraph = styled.p`
  white-space: pre-line;
  ${Media.phone`
      width:95%;
      font-size: 14px;
      line-height: 2;
    `};
`;
