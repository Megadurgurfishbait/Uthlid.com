import React from "react";
import styled from "styled-components";
import { TimelineLite, Power3 } from "gsap/TweenMax";

import Sidebar from "./Container";
import SidebarContext from "../../Context/Sidebar";
const SidebarWrapper = () => {
  let imgRef = React.useRef(null);
  const [tl] = React.useState(new TimelineLite({ paused: true }));
  const [toggle, setToggle] = React.useState(true);
  const [SidebarOpen, setSidebar] = React.useState(false);
  
  async function toggleTimeline() {
    if (toggle) {
      tl.to(imgRef, 0.1, { height: 2500 })
        .to(imgRef, 0.7, { x: 1920 })
        .to(imgRef, 0.5, { x: 4000, ease: Power3.easeIn })
        .to(imgRef, 0.1, { height: 0 })
        .play();
      setToggle(false);
    }
    tl.pause();
    tl.restart();
  }

  return (
    <SidebarContext.Provider value={{ SidebarOpen, setSidebar }}>
      <Sidebar mahAnimation={toggleTimeline} Position={`left`} />
      <Sidebar Position={`right`} />
      <BigScreen
        ref={element => {
          imgRef = element;
        }}
      />
    </SidebarContext.Provider>
  );
};

export default SidebarWrapper;

const BigScreen = styled.div`
  position: absolute;
  display: flex;
  width: 2000px;
  height: 0vh;
  top: 0;
  left: -2000px;
  z-index: 5000 !important;
  background: linear-gradient(
    to right,
    rgba(55, 55, 55, 1) -30%,
    rgba(75, 75, 75, 1) 130%
  );
`;
