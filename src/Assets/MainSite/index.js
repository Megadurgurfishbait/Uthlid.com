import Small from "./coverphoto_small.jpg";
import Smaller from "./coverphoto_smaller.jpg";
import Regular from "./coverphoto.jpg";
import Sprite from "./icons_40.svg";
import Sprite_Small from "./icons_25.svg";
const SidebarInfo = [
  {
    Title: `Cottages`,
    Path: `/Cottages`,
    Icon: `-40px`,
    Icon_25: `-25px`,
    altText: `Cottages Icon`
  },
  {
    Title: `Horse Rental`,
    Path: `/Horserental`,
    Icon: `-280px`,
    Icon_25: `-175px`,
    altText: `Horse Rental Icon`
  },
  {
    Title: `Golf`,
    Path: `/Golf`,
    Icon: `-160px`,
    Icon_25: `-100px`,
    altText: `Golf Icon`
  },
  {
    Title: `Camping`,
    Path: `/Camping`,
    Icon: `-0px`,
    Icon_25: `-0px`,
    altText: `Camping Icon`
  },
  {
    Title: `Restaurant`,
    Path: `/Restaurant`,
    Icon: `-240px`,
    Icon_25: `-150px`,
    altText: `Restaurant Icon`
  }
];

const SidebarInfo_IS = [
  {
    Title: `Sumarbústaðir`,
    Path: `/Cottages`,
    Icon: `-40px`,
    Icon_25: `-25px`,
    altText: `Vefslóð á sumarbústaði`
  },
  {
    Title: `Hestaleiga`,
    Path: `/Horserental`,
    Icon: `-280px`,
    Icon_25: `-175px`,
    altText: `Vefslóð á hestaleigu`
  },
  {
    Title: `Golf`,
    Path: `/Golf`,
    Icon: `-160px`,
    Icon_25: `-100px`,
    altText: `Vefslóð á golfvöllinn`
  },
  {
    Title: `Tjaldsvæði`,
    Path: `/Camping`,
    Icon: `-0px`,
    Icon_25: `-0px`,
    altText: `Vefslóð á Tjaldsvæðið`
  },
  {
    Title: `Veitingastaður`,
    Path: `/Restaurant`,
    Icon: `-240px`,
    Icon_25: `-150px`,
    altText: `Vefslóð á Vetingastaðinn`
  }
];
const RightSidebarInfo= [
  {large: `-80px`, small: `-50px`},
  {large: `-200px`, small: `-125px`},
  {large: `-160px`, small: `-100px`},
]


export {
  Sprite,
  Sprite_Small,
  Small,
  Smaller,
  Regular,
  SidebarInfo,
  SidebarInfo_IS,
  RightSidebarInfo
};
