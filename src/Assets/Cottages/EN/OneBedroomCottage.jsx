import IconPackage from "../SVG";


const Title = `ONE BEDROOM COTTAGE`;
const Price = `164`;
const CoverPhoto_small = IconPackage.oneBedroom_Small;
const CoverPhoto = IconPackage.oneBedroom;
const URL = `onebedroom`;

const InformationBoxPrice = `Prices From`;
const BlackbarInfo = [
  { Icon: `${IconPackage.sqIcon}`, Text: `38`, IconBlack: `${IconPackage.m2Black}` },
  { Icon: `${IconPackage.personIcon}`, Text: `2`, IconBlack: `${IconPackage.personsBlack}` },
  { Icon: `${IconPackage.discIcon}`, Text: `4`, IconBlack: `${IconPackage.disksBlack}` },
  { Icon: `${IconPackage.bedIcon}`, Text: `1`, IconBlack: `${IconPackage.bedBlack}` }
];

const TextInformation = [
  {
    Title: `Description`,
    Text: `Set in a very romantic spot. The Cottage is ideal for the big wedding night or special anniversaries. It
    houses two people and includes a bedroom equipped with a TV, pillows and comforters. In the Middle of the cottage is a 
    cozy living room. The Kitchen is well equipped with tableware for four persons and a coal barbecue grill is located on the patio.
    Enjoy a nice romantic evening in the inhouse hot tub with a beautiful view over South Iceland including Mt. Hekla and the 
    famous Eyjafjallajokull.
    `
  }
];

const Includes = [
  `WiFi`,
  `Coal Barbecue Grill`,
  `Fully Equipped Kitchen`,
  `Stereo`,
  `TV`,
  `Hot Tub`
];

const SmallIcons = [
  { icon: `${IconPackage.wifiIcon}`, toolTip: `WiFi` },
  { icon: `${IconPackage.stereoIcon}`, toolTip: `Stereo` },
  { icon: `${IconPackage.grillIcon}`, toolTip: `Barbecue/Grill` },
  { icon: `${IconPackage.tvIcon}`, toolTip: `Television` },
  { icon: `${IconPackage.hottubIcon}`, toolTip: `Hot Tub` }
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
