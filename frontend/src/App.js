import { Outlet } from "react-router-dom";
import PageIntro from "./components/PageIntro";
import SimplePageIntro from "./components/SimplePageIntro";
import Aboutus from "./pages/Aboutus";
import Accomodation from "./pages/Accomodation";
import Activities from "./pages/Activities";
import Amenites from "./pages/Amenites";
import Gallery from "./pages/Gallery";
import HostEvents from "./pages/HostEvents";
import Packages from "./pages/Packages";
import ParticipateEvents from "./pages/ParticipateEvents";
import WeeklyRetreat from "./pages/WeeklyRetreat";
import Works from "./pages/Works";


function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
