import CottagesImage from "../Cottages/SVG/img_0021_middle.jpg";
import GolfImage from "../Golf/img_4335_small.jpg";
import HorseRentalImage from "../HorseRental/k3_9089_small.jpg";
import CampingImage from "../Camping/orginal_front.jpg";
import RestaurantImage from "../Restaurant/img_2546_small.jpg";

const RowInformation = [
  {
    Title: `Cottages`,
    Title_IS: `Sumarbústaðir`,
    Paragraph: `From this place is possible to visit the most popular tourist attractions in South and West Iceland within a day.`,
    Paragraph_IS: `Við bjóðum gestum fjölbreyttar tegundir orlofshúsa sem henta ólíkum þörfum ferðamanna.`,
    Image: `${CottagesImage}`,
    Path: `/Cottages`
  },
  {
    Title: `Horse Rental`,
    Title_IS: `Hestaleiga`,
    Paragraph: `Skúmur, Svali, Blesi, Loki and the other horses in Úthlíð welcome all tourist to our Horse rental`,
    Paragraph_IS: `Skúmur, Svali, Blesi, Loki og allir hinir skemmtilegu hestarnir bjóða gesti velkomna í góðan útreiðartúr um nágrenni Úthlíðar.`,
    Image: `${HorseRentalImage}`,
    Path: `/Horserental`
  },
  {
    Title: `Golf`,
    Title_IS: `Golf`,
    Paragraph: `In Uthlid is a nine hole golf course open in the summer time usually from the end of May to the beginning of October.  The course is par 35,  2470 meters on yellow tees and 2118 on red tees.`,
    Paragraph_IS: `Úthliðarvöllur er 9 holu golfvöllur sem er opinn frá maí til október (ef veður leyfir ). Völlurinn er PAR 35, 2470 metrar á gulum teigum og 2118 á rauðum. `,
    Image: `${GolfImage}`,
    Path: `/Golf`
  },
  {
    Title: `Camping`,
    Title_IS: `Tjaldsvæði`,
    Paragraph: `The camping site in Uthlid is well located close to the main road and in walking distance from the restaurant, swimming pool and golf course.`,
    Paragraph_IS: `Tjaldstæðið í Úthlíð er opið allan ársins hring, sturta og heitur pottur er við þjónustumiðstöð ásamt aðstöðu til að vaska upp og þvo þvott. Þjónustumiðstöðin er við veitingastaðinn Réttina.`,
    Image: `${CampingImage}`,
    Path: `/Camping`
  },
  {
    Title: `Restaurant`,
    Title_IS: `Veitingastaður`,
    Paragraph: `The restaurant Réttin is open from 16 – 20pm all days of the year except special holidays. We have a reasonable priced simple food and our guests can either sit inside or take-away to their cottages.`,
    Paragraph_IS: `Veitingastaðurinn er opin kl. 16.-20 allan ársins hring, en á sumrin og á laugardögum er annar afgreiðslutími. 
    Á matseðli eru góðir grillréttir á hagstæðu verði ásamt drykkjum. Hægt er að borða í Réttinni eða taka með sér. `,
    Image: `${RestaurantImage}`,
    Path: `/Restaurant`
  }
];

export default RowInformation;
