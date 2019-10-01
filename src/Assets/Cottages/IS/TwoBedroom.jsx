import IconPackage from "../SVG";


const CoverPhoto_mobile = IconPackage.twoBedroom_Mobile;
const CoverPhoto_small = IconPackage.twoBedroom_Small;
const CoverPhoto = IconPackage.twoBedroom;
const Title = `Tveggja herbergja hús`;
const URL = `TwoBedroom`;
const BlackbarInfo = [
  { Icon: `${IconPackage.sqIcon}`, Text: `50`, IconBlack: `${IconPackage.m2Black}`, ToolTip: `Fermetrar` },
  { Icon: `${IconPackage.personIcon}`, Text: `5-6`, IconBlack: `${IconPackage.personsBlack}`, ToolTip:`Fjöldi einstaklinga` },
  { Icon: `${IconPackage.discIcon}`, Text: `6`, IconBlack: `${IconPackage.disksBlack}`, ToolTip:` Fjöldi leirtauga`  },
  { Icon: `${IconPackage.bedIcon}`, Text: `1`, IconBlack: `${IconPackage.bedBlack}`, ToolTip:`Fjöldi herbergja` }
];

const TextInformation = [
  {
    Title: `Lýsing`,
    Text: `50-60 m2 bústaður fyrir 5-6 gesti. Í bústaðnum eru tvö svefnherbergi með tvíbreiðum rúmum og koju. Einnig er rúmgóð setustofa í bústaðnum með sjónvarpstæki, útvarpstæki og notalegu sófasetti. Baðherbergið er með sturtu. Eldhús er vel búið tækjum til eldamennsku: Eldavél með ofni, kælir, örbylgjuofni, kaffikönnu, hitakönnu, brauðrist og borðbúnaði fyrir allt að 8 manns. Á veröndinni er gasgrill og dásamlegur heitur pottur með sýn um allt Suðurland til Heklu og Eyjafjallajökuls og norðurljósa ef vel viðrar að vetrarlagi.`
  }
];

const InformationBoxPrice = `Prices From`;
const Includes = [
  `WiFi`,
  `Vel búið eldhús`,
  `Útvarp`,
  `TV`,
  `Gasgrill`,
  `Heitur pottur`
];

const SmallIcons = [
  { icon: `${IconPackage.wifiIcon}`, toolTip: `WiFi` },
  { icon: `${IconPackage.stereoIcon}`, toolTip: `Útvarp` },
  { icon: `${IconPackage.grillIcon}`, toolTip: `Gasgrill` },
  { icon: `${IconPackage.tvIcon}`, toolTip: `Television` },
  { icon: `${IconPackage.hottubIcon}`, toolTip: `Heitur pottur` },
  { icon: `${IconPackage.MicrowaveIcon}`, toolTip: `Microwave` }
];
// Allt info fyrir þennan Cottage er export'að hér. Engin þörf að kalla annað til að fá upplýsingar eða icon um hann.
const Info = {
  Title,
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
