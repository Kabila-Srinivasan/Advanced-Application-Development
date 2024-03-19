
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,

} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";


// Recent Card Imports
import img1 from "../components/Update/img1.png";
import img2 from "../components/Update/img2.png";
import img3 from "../components/Update/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: 'Products'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Bookings",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Bookings",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Customer Demographics",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Customer Demographics",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
    {
      img:img1,
      name: "Rajesh Kumar",
      noti: "Kerala",
      time: "The backwater houseboat experience in Kerala was truly magical! The serene surroundings, delicious local cuisine, and warm hospitality made it a memorable trip for my family. Highly recommended!",
    },
    {
      img:img2,
      name: "Priya Patel",
      noti: "Assam",
      time: "We had a fantastic time on the river safari in Assam. The wildlife sightings were breathtaking, and our guide was very knowledgeable. The only downside was the weather, but overall, it was an unforgettable experience.",
    },
    {
      img:img3,
      name: "Amit Singh",
      noti: "Goa",
      time: "The sunset boating tour in Goa was absolutely delightful! The stunning views of the coastline, coupled with the soothing sea breeze, made for a perfect evening. We even spotted dolphins! Definitely worth it.",
    }
  ];
  
