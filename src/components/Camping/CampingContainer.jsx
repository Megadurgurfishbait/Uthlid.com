import React from "react";
import styled from "styled-components";
import { Header, Layout, TextContainer } from "../Reusable/";
// Import Assets
import Info from "../../Assets/Camping/index";
import {Media, Colors} from "../../Assets/Variables/";
import LanguageContext from "../../Context/Language";



const CampingContainer = () => {
  const {English} = React.useContext(LanguageContext);
  return (
  <Layout>
    <Header CoverPhoto={Info.CoverPhoto} />

    <MainDiv>
      <TextContainer {...Info} Camping={true} />
      <FAQ>
        <FAQTitle>FAQ</FAQTitle>
        <FAQContent>
          {English
            ? Info.FAQ.map((value, index) => (
                <div key={`${index}InfoFAQ`}>
                  <FAQQuestion> {value.Question}</FAQQuestion>
                  <FAQAnswer>{value.Answer}</FAQAnswer>
                </div>
              ))
            : Info.FAQ_is.map((value, index) => (
              <div key={`${index}UpplysingarFAQ`}>
                  <FAQQuestion> {value.Question}</FAQQuestion>
                  <FAQAnswer>{value.Answer}</FAQAnswer>
                </div>
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
