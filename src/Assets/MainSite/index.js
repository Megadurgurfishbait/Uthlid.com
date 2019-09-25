import Small from "./coverphoto_small.jpg";
import Smaller from "./coverphoto_smaller.jpg";
import Regular from "./coverphoto.jpg";

import SVG from "./svg";

const SidebarInfo = [
  { Title: `Cottages`, Path: `/Cottages`, Icon: `${SVG.CottagesIcon}` },
  {
    Title: `Horse Rental`,
    Path: `/Horserental`,
    Icon: `${SVG.HorseRentalIcon}`,
    altText: `Horse Rental Icon`
  },
  { Title: `Golf`, Path: `/Golf`, Icon: `${SVG.GolfIcon}`,
  altText: `Golf Icon` },
  { Title: `Camping`, Path: `/Camping`, Icon: `${SVG.CampingIcon}`,
  altText: `Camping Icon` },
  { Title: `Restaurant`, Path: `/Restaurant`, Icon: `${SVG.DinnerIcon}`,
  altText: `Restaurant Icon` }
];

const SidebarInfo_IS = [

  { Title: `Sumarbústaðir`, Path: `/Cottages`, Icon: `${SVG.CottagesIcon}`,
  altText: `Vefslóð á sumarbústaði` },
  {
    Title: `Hestaleiga`,
    Path: `/Horserental`,
    Icon: `${SVG.HorseRentalIcon}`,
    altText: `Vefslóð á hestaleigu`
  },
  { Title: `Golf`, Path: `/Golf`, Icon: `${SVG.GolfIcon}`,
  altText: `Vefslóð á golfvöllinn` },
  { Title: `Tjaldsvæði`, Path: `/Camping`, Icon: `${SVG.CampingIcon}`,
  altText: `Vefslóð á Tjaldsvæðið` },
  { Title: `Veitingastaður`, Path: `/Restaurant`, Icon: `${SVG.DinnerIcon}`,
  altText: `Vefslóð á Vetingastaðinn` }
];

const RightSidebarInfo = [
    SVG.FacebookIcon,
    SVG.LocationIcon,
    SVG.InfoIcon
]
export { Small, Smaller, Regular, SidebarInfo, SidebarInfo_IS, SVG, RightSidebarInfo };
