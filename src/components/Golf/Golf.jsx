import React from "react";

// Import Components
import {
  Layout,
  Header,
  BlackbarInformation,
  TextContainer
} from "../Reusable";

// Import Assets
import Info from "../../Assets/Golf/index";
import getWindowDimensions from "../../Hooks/useWindowDimensions";

const Golf = () => {
  const [drasl] = React.useState(getWindowDimensions());
  return (
    <Layout>
      <Header
        CoverPhoto={
          drasl.width > 700 ? Info.CoverPhoto : Info.CoverPhoto_Mobile
        }
      />
      <BlackbarInformation golf={true} horseInformation={false} {...Info} />
      <TextContainer {...Info} />
    </Layout>
  );
};

export default Golf;
