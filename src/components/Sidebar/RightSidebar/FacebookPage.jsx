import React from "react";
import styled from "styled-components";

// Assets
import { Media, MediaHeight } from "../../../Assets/Variables/";

const FacebookPage = () => (

    <div
      class="fb-page"
      data-href="https://www.facebook.com/Uthlid-Iceland-Cottages-312270718970655/"
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="false"
    >
      <blockquote
        cite="https://www.facebook.com/Uthlid-Iceland-Cottages-312270718970655/"
        class="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/Uthlid-Iceland-Cottages-312270718970655/">
          Uthlid Iceland Cottages
        </a>
      </blockquote>
    </div>
);

export default FacebookPage;

const Container = styled.div`
  display: flex;
  width: 320px;
  height: 200px;
  z-index: 501;
  ${Media.tablet`display: none !important;`};
  ${MediaHeight.phone`display: none !important;`};
`;
