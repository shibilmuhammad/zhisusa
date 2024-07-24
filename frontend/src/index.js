import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Aboutus from "./pages/Aboutus";
import Gallery from "./pages/Gallery";
import Works from "./pages/Works";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Packages from "./pages/Packages";
import WeeklyRetreat from "./pages/WeeklyRetreat";

import Contactus from "./pages/Contactus";
import Events from "./pages/Events";
import ParticipateEventDetails from "./pages/ParticipateEventDetails";
import ParticipateEventBooking from "./pages/ParticipateEventBooking";
import ParticipateEventBookingStatus from "./pages/ParticipateEventBookingStatus";
import Home from "./pages/Home";
import ParticipateEventIntro from "./components/ParticipateEventIntro";
import ParticipateEvents from "./pages/ParticipateEvents";
import MonthlyHaven from "./pages/MonthlyHaven";
import Yearly from "./pages/Yearly";
import Amenites from "./pages/Amenites";
import Accomodation from "./pages/Accomodation";
import Activities from "./pages/Activities";
import ActivitiesTypes from "./pages/Admins/ActivitiesTypes";
import BookRoom from "./pages/BookRoom";
import ConfirmStay from "./pages/ConfirmStay";
import PersonalizeBooking from "./pages/PersonalizeBooking";

import ActivityDetailsMob from "./pages/ActivityDetailsMob";
import Categories from "./pages/Admins/Categories";
import Login from "./components/Admin/Login";
import Live from "./pages/Admins/Live";
import EventsTypes from "./pages/Admins/EventsTypes";


const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/gallery",
				element: <Gallery />,
			},
			{
				path: "/aboutus",
				element: <Aboutus />,
			},
			{
				path: "/dailyescape",
				element: <Packages />,
			},
			{
				path: "/weeklyretreat",
				element: <WeeklyRetreat />,
			},
			{
				path: "/contactus",
				element: <Contactus />,
			},
			{
				path: "/events",
				element: <Events />,
			},
			{
				path: "/eventsParticipate",
				element: <ParticipateEvents />,
			},
			{
				path: "/eventDetails",
				element: <ParticipateEventDetails />,
			},
			{
				path: "/eventBooking",
				element: <ParticipateEventBooking />,
			},
			{
				path: "/eventBookingStatus",
				element: <ParticipateEventBookingStatus />,
			},
			{
				path: "/monthlyhaven",
				element: <MonthlyHaven />,
			},
			{
				path: "/yearly",
				element: <Yearly />,
			},
			{
				path: "/amenities",
				element: <Amenites />,
			},
			{
				path: "/accommodation",
				element: <Accomodation />,
			},
			{
				path: "/activites",
				element: <Activities />,
			},
			{
				path: "/bookspace",
				element: <Works />,
			},
			{
				path: "/bookroom",
				element: <BookRoom />,
			},
			{
				path: "/confirmstay",
				element: <ConfirmStay />,
			},
			{
				path: "/personalize",
				element: <PersonalizeBooking />,
			},
			{
				path: "/admin/categories",
				element: <Categories />,
			},
			{
				path: "/work",
				element: <Works />,
			},
			{ path: "/activityDetails", element: <ActivityDetailsMob /> },
			{ path: "/admin/login", element: <Login /> },

      { path: "/admin/events", element: <EventsTypes/>},
      { path: "/admin/live", element: <Live/> },

      		{ path: "/admin/activity", element: <ActivitiesTypes/> },
			

		],
		errorElement: <Works />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
