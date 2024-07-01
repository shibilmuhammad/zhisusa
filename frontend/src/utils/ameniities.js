import { MdFastfood } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { MdRoomService } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";
import { GiMountains } from "react-icons/gi";
import { FaSpa } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { IoFitness } from "react-icons/io5";
import { FaPersonSkating } from "react-icons/fa6";
import { IoMdBoat } from "react-icons/io";
import { PiPersonSimpleHikeBold } from "react-icons/pi";
import { MdAssistant } from "react-icons/md";
import { MdOutlineSportsCricket } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { MdOutlineAssistWalker } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
const amenitiesData = [
  {
    title: "Dining Deligts",
    imgUrl: "../images/dining.jpeg",
    imageCaption: "find YOur Best Meal !!",
    point1Title: "Gourmet Meals",
    point1Des:
      "Indulge in exquisite dishes prepared with fresh, locally sourced ingredients.",
    point1Icon: MdFastfood,
    point2Title: "in-Room Service",
    point2Des: "Enjoy the convenience of dining in the comfort of your room..",
    point2Icon: MdRoomService,
    point3Title: "A Menu",
    point3Des:
      "Choose from a wide selection of breakfast, lunch, dinner, snacks, beverages, and desserts.",
    point3Icon: BiSolidFoodMenu,
  },
  {
    title: "Spa & Wellness",
    imgUrl: "../images/wellness.jpeg",
    imageCaption: "find YOur Best Meal !!",
    point1Title: "Luxurious Spa Treatments:",
    point1Des:
      "Pamper yourself with massages, facials, and more.",
    point1Icon: FaSpa,
    point2Title: "Wellness Programs",
    point2Des: "Participate in yoga, meditation, and other wellness activities.",
    point2Icon: GiMeditation,
    point3Title: "Tranquil Atmosphere",
    point3Des:
      "Relax in a serene and calming environment.",
    point3Icon: GiMountains,
  },
  {
    title: "Ready to Stay Fit?",
    imgUrl: "../images/gym.jpeg",
    imageCaption: "modern",
    point1Title: "Modern Gym Facilities",
    point1Des:
      "Access state-of-the-art equipment for all your workout needs.",
    point1Icon:CgGym,
    point2Title: "Fitness Classes",
    point2Des: "Join group fitness sessions for a dynamic workout experience.",
    point2Icon: IoFitness,
    point3Title: "Personal Training ",
    point3Des:
      "Receive personalized fitness plans from professional trainers.",
    point3Icon: FaPersonSkating,
  },
  {
    title: "Looking for Adventure?",
    imgUrl: "../images/surfing.jpeg",
    imageCaption: "find YOur Best Meal !!",
    point1Title: "Boating and Water Sports",
    point1Des:
      "Explore serene waters with our boating activities.",
    point1Icon: IoMdBoat,
    point2Title: "Nature Hikes",
    point2Des: "Discover picturesque trails with guided nature hikes.",
    point2Icon: PiPersonSimpleHikeBold,
    point3Title: "Sports Facilities",
    point3Des:
      "Choose from a wide selection of breakfast, lunch, dinner, snacks, beverages, and desserts.",
    point3Icon: MdOutlineSportsCricket,
  },
  {
    title: "How Can We Serve You Better?",
    imgUrl: "../images/personilized.jpeg",
    imageCaption: "find YOur Best Meal !!",
    point1Title: "Concierge Assistance",
    point1Des:
      "Get help with bookings, reservations, and other requests.",
    point1Icon: MdAssistant,
    point2Title: "Bespoke Experiences",
    point2Des: "Tailored activities and experiences to match your interests.",
    point2Icon: GiMeditation,
    point3Title: "Attentive Care",
    point3Des:
      "Experience top-notch service throughout your stay.",
    point3Icon: MdOutlineAssistWalker,
  },
  {
    title: "Additional Comforts",
    imgUrl: "../images/sports.jpeg",
    imageCaption: "High-Speed Internet",
    point1Title: "High-Speed Internet ",
    point1Des:
      "Stay connected with reliable and fast internet access.",
    point1Icon: FaWifi,
    point2Title: "Laundry Services ",
    point2Des: "Enjoy the convenience of on-site laundry and dry cleaning.",
    point2Icon: GiClothes,
    point3Title: "Room Amenities",
    point3Des:
      "Benefit from additional in-room comforts like coffee makers and mini-fridges.",
    point3Icon: MdAssistant,
  },
];
export { amenitiesData };
