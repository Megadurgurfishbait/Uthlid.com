import React from "react";
import styled from "styled-components";

// Components
import { Header, Layout, TextContainer, SEO } from "../Reusable/";
// Import Assets
import Info from "../../Assets/Camping/index";
import { Media, Colors } from "../../Assets/Variables/";
// Hooks
import LanguageContext from "../../Context/Language";
import getWindowDimensions from "../../Hooks/useWindowDimensions";

const CampingContainer = () => {
  const [drasl] = React.useState(getWindowDimensions());
  const { English } = React.useContext(LanguageContext);
  return (
    <Layout>
      <SEO
        title={`Camping`}
        keywords={`Showers, Hot Tubes, Free Wifi`}
        description={`
        Showers and hot tubs are included in the price. Moreover, guests have access to facilities to eat their food and even wash their dishes!
      Our Restaurant has free WiFi.
      For a fair price we offer access to an automatic laundry service on site.`}
      />
      <Header
        CoverPhoto={
          drasl.width > 700 ? Info.CoverPhoto : Info.CoverPhoto_Mobile
        }
      />
      <MainDiv>
        <TextContainer {...Info} Camping={true} />
        <FAQ>
          <FAQTitle>FAQ</FAQTitle>
          <FAQContent>
            {English
              ? Info.FAQ.map((value, index) => (
                  <li key={`${index}InfoFAQ`}>
                    <FAQQuestion> {value.Question}</FAQQuestion>
                    <FAQAnswer>{value.Answer}</FAQAnswer>
                  </li>
                ))
              : Info.FAQ_is.map((value, index) => (
                  <li key={`${index}UpplysingarFAQ`}>
                    <FAQQuestion> {value.Question}</FAQQuestion>
                    <FAQAnswer>{value.Answer}</FAQAnswer>
                  </li>
                ))}
          </FAQContent>
        </FAQ>
      </MainDiv>
    </Layout>
  );
};

export default CampingContainer;

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  ${Media.desktop`
        flex-wrap: wrap;
  `};
`;

const FAQ = styled.div`
  width: 50%;
  margin: 80px 10px 0px 0px;
  padding: 5px 15px;
  text-align: left;
  background-color: ${Colors.LIGHTGOLD};
  color: ${Colors.BLACK};

  ${Media.desktop`
    margin: 1px auto;
    width: 70%;
  `};
`;

const FAQContent = styled.ul`
  text-align: left;
  padding: 0px;
  margin: 0px;

  & > li {
    list-style: none;
  }
  ${Media.desktop`
    margin-left: 20px;
  `};
`;

const FAQTitle = styled.h3`
  margin-bottom: 10px;
  padding: 0px;
  text-align: center;

  ${Media.desktop`
    margin: 20px 0px 10px 20px;
  `};
`;
const FAQQuestion = styled.h5`
  font-weight: 600;
  font-size: 16px;
  margin: 1px 3px;
`;
const FAQAnswer = styled.h5`
  font-weight: 300;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 15px;
`;
