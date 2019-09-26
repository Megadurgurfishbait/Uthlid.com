import React from "react";
import styled from "styled-components";

// Assets
import { Media } from "../../Assets/Variables/";
import TextIncludes from "./TextIncludes";
import LanguageContext from "../../Context/Language";


/*
  Text Container er lýsing á sumarbústaði. 
  Ef að sumarbústaðurinn er með upplýsingar um Inlcudes þá sýnir hann þær líka. 
  Ef ekkert Includes er til staðar render'ar hann það ekki.
*/

const TextContainer = ({
  TextInformation,
  Upplysingar,
  Includes,
  Camping,
  Leiga
}) => {
  const { English } = React.useContext(LanguageContext);
  return (
    <Container>

      <Textbox Camping={Camping ? true : false}>
        {English
          ? TextInformation.map((values, index) => (
              <Text key={`${index}TextContainer`}>
                <TextTitle>{values.Title}</TextTitle>
                <TextParagraph>{values.Text}</TextParagraph>
              </Text>
            ))
          : Upplysingar.map((values, index) => (
            <Text key={`${index}TextaBox`}>
                <TextTitle>{values.Title}</TextTitle>
                <TextParagraph>{values.Text}</TextParagraph>
              </Text>
            ))}

        {!English ? (
          <TextIncludes Includes={Leiga} />
        ) : Includes ? (
          <TextIncludes Includes={Includes} />
        ) : null}
      </Textbox>
      <FakeContainer Camping={Camping ? true : false} />
    </Container>
  );
};

export default TextContainer;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  margin-top: 80px;
`;

const Textbox = styled.div`
  display: flex;
  width: ${props => (props.Camping ? "100%" : "60%")};
  height: 100%;
  flex-direction: column;
  margin-left: 20px;
  ${Media.desktop`
    width: 100%;
  `};
`;

const FakeContainer = styled.div`
  display: ${props => (props.Camping ? "none" : "flex")};
  width: 40%;
  height: 100%;

  ${Media.desktop`display: none;`};
`;

const Text = styled.div`
  margin: 1px auto;
  width: 80%;
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
  line-height: 1.5;
  ${Media.phone`
      width:95%;
      font-size: 14px;
      line-height: 2;
    `};
`;
