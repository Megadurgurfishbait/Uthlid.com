import IconPackage from "../SVG";

const CoverPhoto_mobile = IconPackage.twoBedroom_Mobile;
const CoverPhoto_small = IconPackage.twoBedroom_Small;
const CoverPhoto = IconPackage.twoBedroom;
const Title = `TWO BEDROOM COTTAGES`;
const Price = `164`;
const URL = `twobedroom`;
const BlackbarInfo = [
  { Icon: `${IconPackage.sqIcon}`, Text: `50`, IconBlack: `${IconPackage.m2Black}`, ToolTip: `Square Meter` },
  { Icon: `${IconPackage.personIcon}`, Text: `5-6`, IconBlack: `${IconPackage.personsBlack}`, ToolTip: `How many persons` },
  { Icon: `${IconPackage.discIcon}`, Text: `6`, IconBlack: `${IconPackage.disksBlack}`, ToolTip: `Dinner plates` },
  { Icon: `${IconPackage.bedIcon}`, Text: `1`, IconBlack: `${IconPackage.bedBlack}`, ToolTip: `How many beds` }
];

const TextInformation = [
  {
    Title: `Description`,
    Text: `50-60 m2 cottages with phenomenal view that houses 5-6 people. There are two bedrooms that houses five people which are equipped with comforters and 
    pillows. The cottages have a living room and dining room, which makes it ideal for families. The living room is equipped with a sofa, a TV and a Stereo. 
    The cottage also comes w ith a fully equipped kitchen, tableware for 6, Microwave oven, and a barbecue propane grill. The cottage has a bathroom with shower 
    and a hot tub.  A beautiful view over South Iceland including Hekla and Eyjafjallajokull.`
  }
];

const InformationBoxPrice = `Prices From`;
const Includes = [
  `WiFi`,
  `Fully Equipped Kitchen`,
  `Stereo`,
  `TV`,
  `Microwave Oven`,
  `Barbecue Propane Grill`,
  `Hot Tub`
];

const SmallIcons = [
  { icon: `${IconPackage.wifiIcon}`, toolTip: `WiFi` },
  { icon: `${IconPackage.stereoIcon}`, toolTip: `Stereo` },
  { icon: `${IconPackage.grillIcon}`, toolTip: `Barbecue/Grill` },
  { icon: `${IconPackage.tvIcon}`, toolTip: `Television` },
  { icon: `${IconPackage.hottubIcon}`, toolTip: `Hot Tub` },
  { icon: `${IconPackage.MicrowaveIcon}`, toolTip: `Microwave` }
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
  CoverPhoto_small,
  CoverPhoto_mobile

};
export default Info;
