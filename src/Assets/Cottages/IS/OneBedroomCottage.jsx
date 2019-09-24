import IconPackage from "../SVG";


const Title = `Ástarbunga`;
const Price = `164`;
const CoverPhoto_small = IconPackage.oneBedroom_Small;
const CoverPhoto = IconPackage.oneBedroom;
const URL = `OneBedroom`;

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
    Text: `Rómantískur og fallegur bústaður fyrir pör sem vilja gera sér dagamun, eða eru í brúðkaupsferð.
    Húsið er með einu svefnherbergi með tvíbreiðu rúmi, notalegri stofu, borðstofu og litlu eldhúsi sem er búið eldavél, kæliskáp, örbylgjuofni, kaffikönnu, hraðsuðukatli og borðbúnaði fyrir 4. Á pallinum er gasgrill og yfirbyggður heitur pottur.
    Njótið þess að dvelja í þessum litla og fallega bústað með útsýn yfir sveitir Suðurlands, bæði til Heklu og Eyjafjallajökuls.    
    `
  }
];

const Includes = [
  `WiFi`,
  `Gasgrill`,
  `Vel búið eldhús`,
  `Útvarp`,
  `Sjónvarp`,
  `Heitur pottur`
];

const SmallIcons = [
  { icon: `${IconPackage.wifiIcon}`, toolTip: `WiFi` },
  { icon: `${IconPackage.stereoIcon}`, toolTip: `Útvarp` },
  { icon: `${IconPackage.grillIcon}`, toolTip: `Gasgrill` },
  { icon: `${IconPackage.tvIcon}`, toolTip: `Sjónvarp` },
  { icon: `${IconPackage.hottubIcon}`, toolTip: `Heitur pottur` }
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
