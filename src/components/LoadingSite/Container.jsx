import React from "react";

// Components
import { Layout, SEO } from "../Reusable/";
import Card from "./Card";
import Bakgrunnur from "./bakgrunnur";



// Sækja myndir úr Assets fyrir hverja röð.
import RowInformation from "../../Assets/LoadingSite/";
const LoadingSiteContainer = () => (
  <>
    <Bakgrunnur />
    <SEO
        title={`Front Page`}
        keywords={`Cottages, Horse Rental, Golf, Camping, Restaurant`}
        description={`Úthlíd Cottages has a 9-hole golf course on site. Guided hiking tours and Icelandic horse riding trips can be arranged, as well as day tours to the western and southern part of Iceland.`}
      />
    <Layout myColor={`transparent`}>
      {/* Ef að röð er slétt tala kemur svartur bakgrunnur, ef að það er oddatala verður hann hvítur. */}
      {RowInformation.map((values, index) => {
        if (index % 2 === 0) {
          return <Card {...values} key={`${index}RowInfo`}  backgroundcolor />;
        } else {
          return <Card {...values} key={`${index}RowInfo`}  />;
        }
      })}
    </Layout>
  </>
);

export default LoadingSiteContainer;
