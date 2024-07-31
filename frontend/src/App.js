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
import { ToastWrapper } from 'keep-react'


function App() {
  return (
    <Provider store={store}>
      <ToastWrapper
        toastOptions={{
          classNames: {
            toast: 'dark:bg-metal-900 border dark:border-metal-800 border-white bg-white',
            title: 'text-metal-900 dark:text-white',
            description: 'dark:text-metal-300 text-metal-600',
            actionButton: 'dark:bg-metal-800 bg-metal-900 text-white',
            cancelButton: 'dark:bg-metal-800 bg-metal-900 text-white',
            closeButton: 'dark:bg-metal-800 bg-metal-900 text-white',
            error: 'text-error-500',
            success: 'text-success-500',
            warning: 'text-warning-500',
            info: 'text-primary-500',
          },
        }}
      >
        
      </ToastWrapper>
      
      <Outlet />
      
    </Provider>
  );
}

export default App;
