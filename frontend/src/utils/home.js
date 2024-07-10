import { LuBedSingle } from "react-icons/lu";
import { MdOutlineLaptopMac } from "react-icons/md";
import { MdOutlineSurfing } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
import { MdLocalDining } from "react-icons/md";
import { FaSpa } from "react-icons/fa";
import { GiArcheryTarget } from "react-icons/gi";
import { GiOfficeChair } from "react-icons/gi";
import { LuMusic4 } from "react-icons/lu";
import { MdOutlineExplore } from "react-icons/md";
export const tabs = [
    {
        title : 'Work',
        icon : MdOutlineLaptopMac
    },
    {
        title : 'Live',
        icon : LuBedSingle
    },
    {
        title : 'Leisure',
        icon : MdOutlineSurfing
    }
]
export const sliderData = [
    {
        icon : IoIosBed,
        title : 'Stay'
    },
    {
        icon : MdLocalDining,
        title : 'Dining'
    },
    {
        icon : FaSpa,
        title : 'Spa'
    },
    {
        icon : GiArcheryTarget,
        title : 'Games'
    },
    {
        icon : GiOfficeChair,
        title : 'Work'
    },
    {
        icon : LuMusic4,
        title : 'Event'
    },
    {
        icon : MdOutlineExplore,
        title : 'Explore'
    },
]
export const textFormat = [
    {
        type : 'Work',
        title : 'Work Type',
        date : 'Booking Duration',
        count : 'Number of People',
        list : ["Private Office","Conference Room","Queit Zone","Co-working Space"]
    },
    {
        type : 'Live',
        title : 'Accomodation',
        date : 'Check in & Checkout',
        count : 'Guests & Rooms',
        list : ["Private Villa","Tents","View Suit Rooms","Tree House Suites"]
    },
    {
        type : 'Leisure',
        title : 'Type',
        date : 'Booking Duration',
        count : 'Number of People',
        list : ["Events","Activities"]
    },
]