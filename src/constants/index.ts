import bedroom from "../assets/img/bedroom.png";
import DiningArea from "../assets/img/DiningArea.png";
import FurnishedApartment from "../assets/img/furnishedApartment.png";
import imagery from "../assets/img/imagery.png";

export const property = [
  {
    id: 0,
    name: "Semi-detached duplex in Yaba",
    address: "Anifowoshe Street Sabo, Yaba",
    propertyDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    imgs: [bedroom, DiningArea, FurnishedApartment, imagery],
    date: "Nov 8",
    units: [
      {
        id: 0,
        unit: 1,
        unitDetails: ["1 Bedroom", "2 Bathroom", "1000Sqft"],
        amount: "150,000",
        img: [],
      },
      {
        id: 0,
        unit: 1,
        unitDetails: ["2 Bedroom", "3 Bathroom", "700Sqft"],
        amount: "350,000",
        img: [],
      },
      {
        id: 0,
        unit: 1,
        unitDetails: ["5 Bedroom", "3 Bathroom", "900Sqft"],
        amount: "980,000",
        img: [],
      },
    ],
  },
  //   {
  //     id: 0,
  //     name: "Full-detached duplex in Life-camp Abuja",
  //     address: "Opposite Stella Marist College, Life-camp",
  //     propertyDesc:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  //     imgs: [bedroom, DiningArea, FurnishedApartment, imagery],
  //     date: "Nov 8",
  //     units: [
  //       {
  //         id: 0,
  //         unit: 1,
  //         unitDetails: ["1 Bedroom", "2 Bathroom", "1000Sqft"],
  //         amount: "150,000",
  //         img: [],
  //       },
  //       {
  //         id: 0,
  //         unit: 1,
  //         unitDetails: ["2 Bedroom", "3 Bathroom", "700Sqft"],
  //         amount: "350,000",
  //         img: [],
  //       },
  //       {
  //         id: 0,
  //         unit: 1,
  //         unitDetails: ["5 Bedroom", "3 Bathroom", "900Sqft"],
  //         amount: "980,000",
  //         img: [],
  //       },
  //     ],
  //   },
];
