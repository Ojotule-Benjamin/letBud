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
    amount: "580,000",
    units: [
      {
        id: 0,
        unit: 1,
        unitDetails: ["1 Bedroom", "2 Bathroom", "1000Sqft"],
        amount: "150,000",
        img: bedroom,
      },
      {
        id: 0,
        unit: 2,
        unitDetails: ["2 Bedroom", "3 Bathroom", "700Sqft"],
        amount: "350,000",
        img: FurnishedApartment,
      },
      {
        id: 0,
        unit: 3,
        unitDetails: ["5 Bedroom", "3 Bathroom", "900Sqft"],
        amount: "80,000",
        img: imagery,
      },
    ],
  },
  {
    id: 1,
    name: "Full-detached duplex in Life-camp Abuja",
    address: "Opposite Stella Marist College, Life-camp",
    propertyDesc:
      "Welcome to our charming semi-detached duplex in the heart of Yaba. This tastefully designed residence on Anifowoshe Street, Sabo, offers a perfect blend of comfort and style. Featuring spacious units with modern amenities, each unit promises a delightful living experience.",
    imgs: [bedroom, DiningArea, FurnishedApartment, imagery],
    date: "8 Dec",
    amount: "80,000",
    units: [
      {
        id: 0,
        unit: 1,
        unitDetails: ["1 Bedroom", "2 Bathroom", "500Sqft"],
        amount: "50,000",
        img: imagery,
      },
      {
        id: 0,
        unit: 2,
        unitDetails: ["1 Bedroom", "3 Bathroom", "700Sqft"],
        amount: "30,000",
        img: FurnishedApartment,
      },
    ],
  },
];
