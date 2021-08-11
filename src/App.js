//import Contact from "./components/Contact";
//import Reservation from "./components/Reservation";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import "./App.css";
import Navbar from "./components/Navbar";
//import GalleryReact from "./components/ReactGallery";
//import Rooms from "./components/Rooms";
//import OrderNow from "./components/OrderNow";
import LiveScore from "./components/LiveScore.jsx";
//import Authentication from "./components/Authentication";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <Authentication /> */}
        <Switch>
          <Route exact path ="/">
            <Home />
          </Route>
          <Route exact path ="/livescore">
            <LiveScore />
          </Route>

          {/* <Route exact path ="/contact">
            <Contact />
          </Route>
          <Route path ="/reservation">
            <Reservation />
          </Route>
           <Route exact path ="/galleryreact">
            <GalleryReact />
          </Route> 
          <Route exact path="/rooms">
            <Rooms />
          </Route>
          <Route exact path="/orderNow">
            <OrderNow />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
