import React, { useState } from "react";
import styled from "styled-components";

// Component
import { Header, BlackbarInformation, Layout, TextIncludes } from "../Reusable";
// Assets
import { Values_Object_EN, Values_Object_IS } from "../../Assets/Cottages/";
import Media from "../../Assets/Variables/media";
import LanguageContext from "../../Context/Language";
import useContentful from "../../Hooks/useContentful";

// CottageInfoOjbect inniheldur upplýsingar um alla sumarbústaðina.
// Síðan fyrir hvern og einn sumarbúsað.
function SinglePageCottage({ match }) {
  const { English } = React.useContext(LanguageContext);
  const Hello = useContentful(match.params.id.toLowerCase());
  const [Information, setInformation] = useState(
    English
      ? Values_Object_EN[match.params.id.toLowerCase()]
      : Values_Object_IS[match.params.id.toLowerCase()]
  );

  React.useEffect(() => {
    if (English) {
      setInformation(Values_Object_EN[match.params.id.toLowerCase()]);
    } else {
      setInformation(Values_Object_IS[match.params.id.toLowerCase()]);
    }
  }, [English]);

  return (
    <Layout>
      <Header {...Information} />
      {/* Sendi niður upplýsingarnar í gegnum props. */}
      <BlackbarInformation
        horseInformation={false}
        {...Information}
        Cottages={true}
        ProductPrice={Hello}
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
}
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
