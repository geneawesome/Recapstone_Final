import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Schedule from "./views/Schedule/Schedule";
import Services from "./views/Services/Services";
import Booknow from "./views/Booknow/Booknow";
import TravelInformations from "./views/TravelInformations/TermsandCondition";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/schedule", element: <Schedule /> },
  { path: "/services", element: <Services /> },
  { path: "/booknow", element: <Booknow /> },
  { path: "/TermsandCondition", element: <TravelInformations /> },
];

export default routes;
