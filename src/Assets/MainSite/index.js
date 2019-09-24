import Small from "./coverphoto_small.jpg";
import Smaller from "./coverphoto_smaller.jpg";
import Regular from "./coverphoto.jpg";

import SVG from "./svg";

const SidebarInfo = [
  { Title: `Cottages`, Path: `/Cottages`, Icon: `${SVG.CottagesIcon}` },
  {
    Title: `Horse Rental`,
    Path: `/Horserental`,
    Icon: `${SVG.HorseRentalIcon}`
  },
  { Title: `Golf`, Path: `/Golf`, Icon: `${SVG.GolfIcon}` },
  { Title: `Camping`, Path: `/Camping`, Icon: `${SVG.CampingIcon}` },
  { Title: `Restaurant`, Path: `/Restaurant`, Icon: `${SVG.DinnerIcon}` }
];

const SidebarInfo_IS = [

  { Title: `Sumarbústaðir`, Path: `/Cottages`, Icon: `${SVG.CottagesIcon}` },
  {
    Title: `Hestaleiga`,
    Path: `/Horserental`,
    Icon: `${SVG.HorseRentalIcon}`
  },
  { Title: `Golf`, Path: `/Golf`, Icon: `${SVG.GolfIcon}` },
  { Title: `Tjaldsvæði`, Path: `/Camping`, Icon: `${SVG.CampingIcon}` },
  { Title: `Veitingastaður`, Path: `/Restaurant`, Icon: `${SVG.DinnerIcon}` }
];

const RightSidebarInfo = [
    SVG.FacebookIcon,
    SVG.LocationIcon,
    SVG.InfoIcon
]
export { Small, Smaller, Regular, SidebarInfo, SidebarInfo_IS, SVG, RightSidebarInfo };
