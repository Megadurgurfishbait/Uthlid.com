import IconPackage from "../SVG";
import CottagesFrontPageImage from '../Cottages/img_8064_mobile.jpg';;
const FrontPageImage = CottagesFrontPageImage;
const Title = `Fjögurra herbergja hús`;
const CoverPhoto = IconPackage.fourBedroom;
const CoverPhoto_small = IconPackage.fourBedroom_Small;
const CoverPhoto_mobile = IconPackage.fourBedroom_Mobile;
const URL = `Fourbedroom`;
const BlackbarInfo = [
  { Icon: `${IconPackage.sqIcon}`, Text: `130`, IconBlack: `${IconPackage.m2Black}`,  ToolTip: `Fermetrar` },
  { Icon: `${IconPackage.personIcon}`, Text: `8`, IconBlack: `${IconPackage.personsBlack}`, ToolTip:`Fjöldi einstaklinga` },
  { Icon: `${IconPackage.discIcon}`, Text: `8`, IconBlack: `${IconPackage.disksBlack}`, ToolTip:` Fjöldi leirtauga` },
  { Icon: `${IconPackage.bedIcon}`, Text: `4`, IconBlack: `${IconPackage.bedBlack}`, ToolTip:`Fjöldi herbergja` }
];

const TextInformation = [
  {
    Title: `Lýsing`,
    Text: `Rúmgott hús fyrir 8 gesti. Í bústaðnum eru fjögur svefnherbergi með tvíbreiðum rúmum sem hægt er að gera eins manns og er hvert herbergi með sitt baðherbergi með sturtu. 
    Í miðrými er rúmgóð setustofa með sjónvarpstæki, útvarpstæki og notalegu sófasetti og borðstofu fyrir allt að 10 manns. Eldhús er vel búið tækjum til eldamennsku: Eldavél með ofni, kælir, örbylgjuofni, kaffikönnu, hitakönnu, brauðrist og borðbúnaði fyrir allt að 12 manns. Fyrir framan setustofuna er yfirbyggður heitur pottur.Á veröndinni er gasgrill með sýn um allt Suðurland til Heklu og Eyjafjallajökuls og norðurljósa ef vel viðrar að vetrarlagi.`
  }
];

const Includes = [
  `WiFi`,
  `Gasgrill`,
  `Vel búið eldhús`,
  `Útvarp`,
  `Heitur pottur`,
  `Sjónvarpstæki`
];

const SmallIcons = [
  { icon: `${IconPackage.wifiIcon}`, toolTip: `WiFi` },
  { icon: `${IconPackage.stereoIcon}`, toolTip: `Útvarp` },
  { icon: `${IconPackage.grillIcon}`, toolTip: `Gasgrill` },
  { icon: `${IconPackage.tvIcon}`, toolTip: `Sjónvarpstæki` },
  { icon: `${IconPackage.hottubIcon}`, toolTip: `Heitur pottur` }
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
  CoverPhoto_small,
  CoverPhoto_mobile,
  FrontPageImage

};
export default Info;
