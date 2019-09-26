import BruararskordImg from "./Bruararskord.jpg";
import BruarfossImg from "./Bruarfoss.jpg";
import HestaleigaImg from "./hestaleiga_uthlid.jpg";
import KolgrimshollImg from "./Kolgrimsholl.jpg";
import HorseBackground from "./k3_9089.jpg";
import HorseBackground_Mobile from './k3_9089_mobile.jpg';
/*

  Allar upplýsingar sem að við ætlum að nota í HorseRental fara hingað inn. Myndir ásamt texta.

*/
const Price = [
  { Title: `.5 hours`, Price: `50` },
  { Title: `1  hours`, Price: `60` },
  { Title: `2  hours`, Price: `100` }
];

const Verd = [
  { Title: `Hálftími`, Price: `50` },
  { Title: `1  tími`, Price: `60` },
  { Title: `2  tími`, Price: `100` }
];

const HorseRentInformation = [
  {
    Title: `Kolgrímshóll`,
    Price: `120`,
    Info: `Riding tour to the mountains, ended on small hill, Kolgrímshóll – “Coal man-hill”.
    We hike to the top of the hill.`,
    BackgroundImg: `${KolgrimshollImg}`
  },
  {
    Title: `Miðfellshringur`,
    Price: `120`,
    Info: `About three hour trip
  around the mountain Miðfell.`,
  BackgroundImg: `${HestaleigaImg}`
  },
  {
    Title: `Brúarárskörð`,
    Price: `170`,
    Info: `One day trip to the beautiful canyon
  Brúarárskörð. Riding to the canyon around
  unspoiled nature of Úthlíð, stop once
  on the road to the canyon.`,
  BackgroundImg: `${BruararskordImg}`
  },
  {
    Title: `Brúarfoss`,
    Price: `120`,
    Info: `Approximately 3 hour trip
  to the waterfall Brúarárfoss.`,
  BackgroundImg: `${BruarfossImg}`
  }
];

const HestaleigaInformation = [
  {
    Title: `Kolgrímshóll`,
    Price: `120`,
    Info: `Skemmtilegur reiðtúr í átt til fjalla sem endar við fallegan hól sem stendur upp úr hrauninu og er kallaður Kolgrímshóll. 
    Þar er áð um stund og gengið upp á hólinn til að njóta útsýnis.`,
    BackgroundImg: `${KolgrimshollImg}`
  },
  {
    Title: `Miðfellshringur`,
    Price: `120`,
    Info: `Liðlega þriggja tíma reiðtúr frá Réttinni og inn að Miðfelli. Þar er áð og svo er ferðinni haldið áfram hringinn í kringum fellið – riðnar Miðfellsflatirnar og svo heim. `,
  BackgroundImg: `${HestaleigaImg}`
  },
  {
    Title: `Brúarárskörð`,
    Price: `170`,
    Info: `Dagferð með nesti og nýja skó. 
    Riðið er sem leið liggur inn Úthlíðarhraun í átt að hinum mögnuðu Brúarárskörðum. Áð er á leiðinni við Kolgímshól. 
    Þegar komið er inn í Skörð eru hestar bundnir og gengið inn í skörðin.`,
  BackgroundImg: `${BruararskordImg}`
  },
  {
    Title: `Brúarfoss`,
    Price: `120`,
    Info: `Tveggja tíma reiðtúr um Kóngsveg að þessum magnaða fossi.`,
  BackgroundImg: `${BruarfossImg}`
  }
];



export {
  Price,
  HorseBackground,
  HorseBackground_Mobile,
  HorseRentInformation,
  HestaleigaInformation,
  Verd
}
