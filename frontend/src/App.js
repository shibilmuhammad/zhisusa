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
import { Provider } from "react-redux";
import store from "./utils/store";


function App() {
  return (
    <Provider store={store}>
      
      <Outlet />
    </Provider>
  );
}

export default App;
