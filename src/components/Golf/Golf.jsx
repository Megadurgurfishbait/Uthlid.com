import React from "react";

// Import Components
import {
  Layout,
  Header,
  BlackbarInformation,
  TextContainer,
  SEO
} from "../Reusable";

// Import Assets
import Info from "../../Assets/Golf/index";
import getWindowDimensions from "../../Hooks/useWindowDimensions";

const Golf = () => {
  const [drasl] = React.useState(getWindowDimensions());
  return (
    <Layout>
      <SEO
        title={`Golf Course`}
        keywords={`Golf, Golf Course, Available for Rent, Nine holes`}
        description={`
        In Uthlid is a nine hole golf course open in the summer time usually from the end of May to the beginning of October.
        The golf course is friendly and easy to play but nevertheless provides a challenge for all level of golfers.`}
      />
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
