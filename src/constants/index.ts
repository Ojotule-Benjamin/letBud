import bedroom from "../assets/img/bedroom.png";
import DiningArea from "../assets/img/DiningArea.png";
import FurnishedApartment from "../assets/img/furnishedApartment.png";
import imagery from "../assets/img/imagery.png";

export type PropertyData = {
  bedroom: string;
  DiningArea: string;
  FurnishedApartment: string;
  imagery: string;

  Image: {
    id: number;
    picture: keyof PropertyData;
  };

  Unit: {
    unit: number;
    unitDetails: string[];
    amount: string;
    img: keyof PropertyData;
  };

  Property: {
    id: number;
    name: string;
    address: string;
    propertyDesc: string;
    imgs: PropertyData["Image"][];
    date: string;
    amount: string;
    units: PropertyData["Unit"][];
  };
};

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
    units: [
      {
        unit: 1,
        unitDetails: ["1 Bedroom", "2 Bathroom", "1000Sqft"],
        amount: "150,000",
        img: bedroom,
      },
      {
        unit: 2,
        unitDetails: ["2 Bedroom", "3 Bathroom", "700Sqft"],
        amount: "350,000",
        img: FurnishedApartment,
      },
      {
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
      "Welcome to our charming semi-detached duplex in the heart of Abuja. This tastefully designed residence on Anifowoshe Street, Sabo, offers a perfect blend of comfort and style. Featuring spacious units with modern amenities, each unit promises a delightful living experience.",
    // imgs: [bedroom, DiningArea, FurnishedApartment, imagery],
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
    units: [
      {
        unit: 1,
        unitDetails: ["1 Bedroom", "2 Bathroom", "500Sqft"],
        amount: "50,000",
        img: imagery,
      },
      {
        unit: 2,
        unitDetails: ["1 Bedroom", "3 Bathroom", "700Sqft"],
        amount: "30,000",
        img: FurnishedApartment,
      },
    ],
  },
];
