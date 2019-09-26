/*

  Ef að við ætlum að kalla á þetta þurfum við bara að gera "Assets/Cottages/SVG" en ekki "Assets/Cottages/SVG/index.js"
  Þar sem að Javascript leitar alltaf fyrst af index.js í hverjum folder'i þá kalla ég þennan file index.js.
  Í öðru lagi er snyrtilegra að fá bara object sem er með öllum icon í stað þess að kalla á þau oft á mismunandi stöðum.

*/

import economyImage from "./img_0028.jpg";
import economyImage_Small from './img_0028_small.jpg';
import economyImage_Mobile from './img_0028_mobile.jpg';
import oneBedroom from "./img_0021.jpg";
import oneBedroom_Small from './img_0021_small.jpg';
import oneBedroom_Mobile from './img_0021_mobile.jpg';
import twoBedroom from "./img_0011n.jpg";
import twoBedroom_Small from './img_0011n_small.jpg';
import twoBedroom_Mobile from './img_0011n_mobile.jpg';
import fourBedroom from "./img_8064.jpg";
import fourBedroom_Small from "./img_8064_small.jpg";
import fourBedroom_Mobile from './img_8064_mobile.jpg';
import sqIcon from "./m2.svg";
import personIcon from "./persons.svg";
import bedIcon from "./bed.svg";
import MicrowaveIcon from "./microw.svg";
import discIcon from "./disks.svg";
import grillIcon from "./grill.svg";
import stereoIcon from "./stereo.svg";
import wifiIcon from "./wifi.svg";
import tvIcon from "./tv.svg";
import hottubIcon from "./hottub.svg";
import bedBlack from "./bedBlack.svg";
import disksBlack from "./disksBlack.svg";
import m2Black from "./m2Black.svg";
import personsBlack from "./personsBlack.svg";




const IconPackage = {
  economyImage_Mobile,
  oneBedroom_Mobile,
  twoBedroom_Mobile,
  fourBedroom_Mobile,
  economyImage,
  economyImage_Small,
  oneBedroom,
  oneBedroom_Small,
  twoBedroom,
  twoBedroom_Small,
  fourBedroom,
  fourBedroom_Small,
  sqIcon,
  personIcon,
  bedIcon,
  MicrowaveIcon,
  discIcon,
  grillIcon,
  stereoIcon,
  wifiIcon,
  tvIcon,
  hottubIcon,
  bedBlack,
  disksBlack,
  m2Black,
  personsBlack
};

export default IconPackage;
