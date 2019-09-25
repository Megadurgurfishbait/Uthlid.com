import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../Assets/Variables";
import useLocalStorage from "../../Hooks/useLocalStorage";
import LanguageContext from "../../Context/Language";

const ChangeLanguage = ({ mahAnimation }) => {
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
    mahAnimation();
    await asyncCall();
    setLanguage(!language);
  }
  //-----------------------------------------------
  return (
    <Container turn={clickable}>
      <LanguageButton
        onClick={() => (clickable ? onButtonClick() : setClickable(false))}
      >
        {setClickable ? "EN" : "IS"}
      </LanguageButton>
      <LanguageButton
        right
        onClick={() => (clickable ? onButtonClick() : setClickable(false))}
      >
        {language ? "EN" : "IS"}
      </LanguageButton>
    </Container>
  );
};

export default ChangeLanguage;

const Container = styled.div`
  background-color: ${Colors.GOLD};
  width: 60px;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 4px;
  position: relative;
  border: 2px solid transparent;
  transform-style: preserve-3d;
  transition: all 0.5s ease-out;
  transform-origin: 00% 100%;
  ${props => console.log(props.turn)};
  transform: ${props => (props.turn ? "rotateY(-90deg)" : "rotateY(0)")};
`;

const LanguageButton = styled(Link)`
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
  padding: 0px;
  color: ${Colors.BLACK};
  font-weight: 800;
  font-size: 22px;
  letter-spacing: 2px;
  transform: ${props => (props.right ? "rotateY(90deg)" : "rotateY(0deg)")};
  transform-origin: 00% 100%;

  &:hover,
  &:focus {
    color: ${Colors.BLACK};
    text-decoration: none;
    cursor: pointer;
  }
`;
