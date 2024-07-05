import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Aboutus from './pages/Aboutus';
import Gallery from './pages/Gallery';
import Works from './pages/Works';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import Packages from './pages/Packages';
import WeeklyRetreat from './pages/WeeklyRetreat';

import Contactus from './pages/Contactus';
import Events from './pages/Events';
import ParticipateEventDetails from './pages/ParticipateEventDetails';
import ParticipateEventBooking from './pages/ParticipateEventBooking';
import ParticipateEventBookingStatus from './pages/ParticipateEventBookingStatus';
import Home from './pages/Home';
import ParticipateEventIntro from './components/ParticipateEventIntro';
import ParticipateEvents from './pages/ParticipateEvents';
import MonthlyHaven from './pages/MonthlyHaven';
import Yearly from './pages/Yearly';
import Amenites from './pages/Amenites';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/gallary",
        element: <Gallery />,
      },
      {
        path: "/aboutus",
        element: <Aboutus />,
      },
      {
        path: "/dailyescape",
        element:<Packages />,
      },
      {
        path: "/weeklyretreat",
        element:<WeeklyRetreat />,
      },
      {
        path: "/contactus",
        element: <Contactus />
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
      
      
    ],
    errorElement: <Works />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
