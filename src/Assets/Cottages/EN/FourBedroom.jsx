import IconPackage from "../SVG";

const Title = `FOUR BEDROOM COTTAGES`;
const Price = `282`;
const CoverPhoto = IconPackage.fourBedroom;
const CoverPhoto_small = IconPackage.fourBedroom_Small;
const URL = `fourbedroom`;


const InformationBoxPrice = `Prices From`;
const BlackbarInfo = [
  { Icon: `${IconPackage.sqIcon}`, Text: `130`, IconBlack: `${IconPackage.m2Black}` },
  { Icon: `${IconPackage.personIcon}`, Text: `8`, IconBlack: `${IconPackage.personsBlack}` },
  { Icon: `${IconPackage.discIcon}`, Text: `8`, IconBlack: `${IconPackage.disksBlack}` },
  { Icon: `${IconPackage.bedIcon}`, Text: `4`, IconBlack: `${IconPackage.bedBlack}` }
];

const TextInformation = [
  {
    Title: `Description`,
    Text: `Luxuray cottage that houses eight persons. There are four bedrooms, each includes a queen size bed (two single beds can be arranged) with a separate bathroom
    equipped with a shower. In the middle of the cottage is a large living room which includes a stereo and a TV. Attached to the living room is the dining area with fully
    equipped kitchen and a large barbecue propane grill is located at the patio. The cottage has a beautiful view over South Iceland including Mt. Hekla and the famous Eyjafjallajökull. `
  }
];

const Includes = [
  `WiFi`,
  `Barbecue Propane Grill`,
  `Fully Equipped Kitchen`,
  `Stereo`,
  `Microwave`,
  `Jacuzzi`
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
  CoverPhoto_small

};
export default Info;
