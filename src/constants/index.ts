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
    imgs: [
      {
        id: 0,
        picture: bedroom,
      },
      {
        id: 1,
        picture: DiningArea,
      },
      {
        id: 2,
        picture: FurnishedApartment,
      },
      {
        id: 3,
        picture: imagery,
      },
    ],
    date: "Nov 8",
    amount: "7,000,000",
    billSummary: {
      cautionFee: 350000,
      agencyFee: 350000,
      letBudServiceFee: 700000,
      electricityBill: 400000,
      wasteBill: 200000,
      RentalYearlyFee: 5000000,
    },
    features: [
      "Off street parking",
      "24 hours electricity",
      "Air conditioner",
      "Dishwasher",
      "Tiled floor",
      "Pool",
      "Car park",
      "Furnished apartment",
      "Washing machine",
      "Balcony/deck",
    ],
    rooms: ["3 Bedroom", "5 Bathroom", "1700Sqft"],
    units: [
      {
        id: 0,
        unit: 1,
        unitDetails: ["1 Bedroom", "2 Bathroom", "1000Sqft"],
        amount: "1,550,000",
        img: bedroom,
      },
      {
        id: 1,
        unit: 2,
        unitDetails: ["2 Bedroom", "3 Bathroom", "700Sqft"],
        amount: "2,500,000",
        img: FurnishedApartment,
      },
      {
        id: 2,
        unit: 3,
        unitDetails: ["5 Bedroom", "3 Bathroom", "900Sqft"],
        amount: "80,000",
        img: imagery,
      },
    ],
  },
  {
    id: 1,
    name: "Fully-detached duplex in Life-camp Abuja",
    address: "Opposite Stella Marist College, Life-camp",
    propertyDesc:
      "Welcome to our charming semi-detached duplex in the heart of Abuja. This tastefully designed residence on Anifowoshe Street, Sabo, offers a perfect blend of comfort and style. Featuring spacious units with modern amenities, each unit promises a delightful living experience.",
    imgs: [
      {
        id: 0,
        picture: bedroom,
      },
      {
        id: 1,
        picture: DiningArea,
      },
      {
        id: 2,
        picture: FurnishedApartment,
      },
      {
        id: 3,
        picture: imagery,
      },
    ],
    date: "8 Dec",
    amount: "4,000,000",
    billSummary: {
      cautionFee: 200000,
      agencyFee: 200000,
      letBudServiceFee: 400000,
      electricityBill: 150000,
      wasteBill: 50000,
      RentalYearlyFee: 3000000,
    },
    features: [
      "Off street parking",
      "24 hours electricity",
      "Air conditioner",
      "Dishwasher",
      "Tiled floor",
      "Pool",
      "Car park",
      "Furnished apartment",
      "Washing machine",
      "Balcony/deck",
    ],
    rooms: ["2 Bedroom", "4 Bathroom", "1200Sqft"],
    units: [
      {
        id: 0,
        unit: 1,
        unitDetails: ["1 Bedroom", "1 Bathroom", "500Sqft"],
        amount: "350,000",
        img: imagery,
      },
      {
        id: 1,
        unit: 2,
        unitDetails: ["1 Bedroom", "3 Bathroom", "700Sqft"],
        amount: "650,000",
        img: FurnishedApartment,
      },
    ],
  },
];
