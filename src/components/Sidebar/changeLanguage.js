import React from "react";
import styled from "styled-components";
import { Colors, Media } from "../../Assets/Variables";
import useLocalStorage from "../../Hooks/useLocalStorage";
import LanguageContext from "../../Context/Language";

const ChangeLanguage = ({ mahAnimation, toggle }) => {
  const [language, setLanguage] = useLocalStorage("EnglishLanguage", true);
  const { setEnglish } = React.useContext(LanguageContext);
  const [clickable, setClickable] = React.useState(true);
  //------------------------------------------------//
  // Svo að tungumálið breytist ekki endalaust ef   //
  // ef að einhver stanslaust spammar á hann.       //
  // setClickable: Ekki hægt að endurtaka animation //
  // ef að það er spammað takkann.                  //
  //------------------------------------------------//
  const sleep = m => new Promise(r => setTimeout(r, m));
  async function asyncCall() {
    await sleep(500);
    setEnglish(!language);
    await sleep(1500);
    setClickable(true);
  }

  async function onButtonClick() {
    setClickable(false);
    mahAnimation(!toggle);
    await asyncCall();
    setLanguage(!language);
  }
  //-----------------------------------------------
  return (
    <Container turn={clickable}>
      <LanguageButton
        onClick={() => (clickable ? onButtonClick() : setClickable(false))}
      >
        {language ? "EN" : "IS"}
      </LanguageButton>
    </Container>
  );
};

export default ChangeLanguage;

const Container = styled.div`
  max-width: 50px;
  max-height: 50px;
  min-height: 50px;
  min-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 5px auto;
  position: relative;
  border: 2px solid transparent;
  transform-style: preserve-3d;
  transition: all 0.5s ease-out;

  transform: ${props => (props.turn ? "scale(1)" : "scale(0)")};
  transform-origin: 50% 50%;
  z-index: 5001 !important;

  ${Media.phone`
  margin: auto 5px;
  max-width: 35px;
  max-height: 35px;
  min-height: 35px;
  min-width: 35px;
  `};
`;

const LanguageButton = styled.button`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.GOLD};
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  width: 100%;
  color: ${Colors.BLACK};
  font-weight: 800;
  font-size: 22px;
  letter-spacing: 1.5px;
  transform: rotateY(0deg);
  border: 2px solid transparent;
  border-radius: 50%;

  &:hover,
  &:focus {
    color: ${Colors.BLACK};
    text-decoration: none;
    cursor: pointer;
    outline: none;
  }

  ${Media.phone`
  bottom: 5px;
  font-size: 14px;
  letter-spacing: 1px;
  `};
`;
