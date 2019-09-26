import IconPackage from "../SVG"; // Fæ öll icon og myndir héðan.


const Title = `Minnibungur 1-5`;
const Price = ``;
const CoverPhoto_small = IconPackage.economyImage_Small;
const CoverPhoto = IconPackage.economyImage;
const URL = `Economy`;
const InformationBoxPrice = ``;
const BlackbarInfo = [
  { Icon: `${IconPackage.sqIcon}`, Text: `34`, IconBlack: `${IconPackage.m2Black}`, ToolTip: `Fermetrar` },
  { Icon: `${IconPackage.personIcon}`, Text: `4-6`, IconBlack: `${IconPackage.personsBlack}`, ToolTip:`Fjöldi einstaklinga` },
  { Icon: `${IconPackage.discIcon}`, Text: `6`, IconBlack: `${IconPackage.disksBlack}`, ToolTip:` Fjöldi leirtauga`  },
  { Icon: `${IconPackage.bedIcon}`, Text: `2`, IconBlack: `${IconPackage.bedBlack}`, ToolTip:`Fjöldi herbergja`  }
];

const TextInformation = [
  {
    Title: `Lýsing`,
    Text: `Ljómandi góð lítil hús fyrir 4 – 6 gesti. 
    Húsið er með tveimur svefnherbergjum, hvort um sig er með tvíbreiðu rúmi, góðu baðherbergi, litlum eldhúskrók og setu/borðstofu. 
    Eldhúsið er með eldavél, kæli, örbylgjuofni, kaffikönnu, hraðsuðukatliog er búið yrir 6 manna borðhald.
    Svefnsófi er í stofunni fyrir börn eða unglinga. `
  }
];

const Includes = [
  `WiFi`,
  `Grill í sameiginlegu grillhúsi`,
  `Eldhús með góðum tækjum`,
  `Útvarp`
];

const SmallIcons = [
  { icon: `${IconPackage.wifiIcon}`, toolTip: `WiFi` },
  { icon: `${IconPackage.stereoIcon}`, toolTip: `Útvarp` },
  { icon: `${IconPackage.grillIcon}`, toolTip: `Grill` }
];


// Allt info fyrir þennan Cottage er export'að hér. Engin þörf að kalla annað til að fá upplýsingar eða icon um hann.
const Info = {
    Title,
    Price,
    CoverPhoto,
    BlackbarInfo,
    TextInformation,
    Includes,
    SmallIcons,
    URL,
    InformationBoxPrice,
    CoverPhoto_small

};
export default Info;
