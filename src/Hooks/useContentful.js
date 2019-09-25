import { useState, useEffect, useContext } from "react";
import LanguageContext from "../Context/Language";

var contentful = require("contentful");

export default function useContentful(match) {
  // Ná í Array
  const [productArray, setProductArray] = useState([]);
  // Athuga hvort síðan er á Ensku eða Íslensku
  const { English } = useContext(LanguageContext);

  // Athuga hvaða síðu við erum á og ná í verðin
  // sem eru annaðhvort í Íslenskum krónum eða Evrum
  const Switch = (match, English) => {
    switch (match) {
      case "onebedroom":
        return English
          ? productArray.oneBedroomCottages
          : productArray.astarbunga;
      case "twobedroom":
        return English
          ? productArray.twoBedroomCottages
          : productArray.tveggjaHerbergja;
      case "economy":
        return English
          ? productArray.economyTwoBedroom
          : productArray.minnibungur15;
      case "fourbedroom":
        return English
          ? productArray.fourbedroom
          : productArray.fjgurraHerbergja;
    }
  };
  // Náum í verð Upplýsingar í Contentful.
  useEffect(() => {
    const client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: "8ye6uxdn2kmf",
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: "I4huRaqUbGMhOeIG5j-Wroqpung_xD-qoLVQDxkcPOY"
    });
    // Sækjum verð upplýsingar og setjum það í ProductArray.
    client.getEntries({ content_type: "product" }).then(response => {
      setProductArray(response.items[0].fields);
    });
  }, []);

  // Sendum til bara þða sem kom úr Switch
  return Switch(match, English);
}
