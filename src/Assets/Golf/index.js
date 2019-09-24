import CoverPhoto from "./img_4335.jpg";

// SVG IMPORT
import golf from "./svg/001-golf.svg";
import Tees from "./svg/005-tee.svg";
import open from "./svg/004-open.svg";

const BlackbarInfo = [
  { Icon: `${golf}`, Text: `Par 35` },
  { Icon: `${Tees}`, Text: `2470m` },
  { Icon: `${Tees}`, Text: `2118m` },
  { Icon: `${open}`, Text: `June Sept` }
];

const Svartastika = [
  { Icon: `${golf}`, Text: `Par 35` },
  { Icon: `${Tees}`, Text: `2470m` },
  { Icon: `${Tees}`, Text: `2118m` },
  { Icon: `${open}`, Text: `Júní Sept` }
]

const InformationBoxPrice = `Day Fees`;

const Price = [
  {
    Title: `Single`,
    Price: `3.200 ISK`
  },
  {
    Title: `Couples`,
    Price: `5.000 ISK`
  }
];

const Verd = [
  {
    Title: `Einstaklingur`,
    Price: `3.200 ISK`
  },
  {
    Title: `Par`,
    Price: `5.000 ISK`
  }
];

const TextInformation = [
  {
    Title: `Information`,
    Text: `In Uthlid is a nine hole golf course open in the summer time usually from the end of May to the beginning of October.  The course is par 35,  2470 meters on yellow tees and 2118 on red tees.`
  },
  {
    Title: `Golf Course`,
    Text: `The golf course is friendly and easy to play but nevertheless provides a challenge for all level of golfers.`
  },
  {
    Title: `Available for Rent`
  }
];

const Upplysingar = [
  {
    Title: `Upplýsingar`,
    Text: `Úthlíðarvöllur er 9 holu golfvöllur sem er opinn allt sumarið og fyrir klúbbfélaga utan þess tíma. 
    Völlurinn er par 35, 2470 metrar af gulum teigum og 2118 af rauðum.`
  },
  {
    Title: `Um völlinn`,
    Text: `Gísli Sigurðsson blaðamaður, myndlistarmaður og afrekskylfingur frá Úthlíð hannaði völlinn með þarfir áhugamannsins í huga. Völlurinn er opinn og skemmtilegur með allskonar óvæntum hættum sem gera hann skemmtilegan fyrir bæði byrjendur sem lengra komna. `
  },
  {
    Title: `Golfbúnaður til leigu`
  }
];

const Includes = [`Golf Clubs`, `Trolleys`, `Buggies`];
const Leiga = [`Golfsett`, `Kerrur`, `Bíl`];
const Info = {
  CoverPhoto,
  TextInformation,
  Includes,
  BlackbarInfo,
  InformationBoxPrice,
  Price,
  Verd,
  Upplysingar,
  Leiga,
  Svartastika
};

export default Info;
