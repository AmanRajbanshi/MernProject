
import {  NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
        <NavLink
                  exact
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  activeClassName="active__nav__link"
                >
                  Home
                </NavLink>

                <NavLink
                  exact
                  className="nav-link"
                  aria-current="page"
                  to="/livescore"
                  activeClassName="active__nav__link"
                >
                LiveScore
                </NavLink>

                <NavLink
                  exact
                  className="nav-link"
                  aria-current="page"
                  to="/registration"
                  activeClassName="active__nav__link"
                >
                Registration
                </NavLink>


                {/* <NavLink
                  exact
                  className="nav-link"
                  aria-current="page"
                  to="/contact"
                  activeClassName="active__nav__link"
                >
                  Contact
                </NavLink>
                <NavLink
                  exact
                  className="nav-link active"
                  aria-current="page"
                  to="/reservation"
                  activeClassName="active__nav__link"
                >
                  Reservation
                </NavLink>
                <NavLink
                  exact
                  className="nav-link active"
                  aria-current="page"
                  to="/galleryreact"
                  activeClassName="active__nav__link"
                >
                  Foods
                </NavLink>
                <NavLink
                  exact
                  className="nav-link active"
                  aria-current="page"
                  to="/rooms"
                  activeClassName="active__nav__link"
                >
                  Rooms
                </NavLink>
                <NavLink
                  exact
                  className="nav-link active"
                  aria-current="page"
                  to="/orderNow"
                  activeClassName="active__nav__link"
                >
                  orderNow
                </NavLink> */}
                {/* <NavLink
                  exact
                  className="nav-link active"
                  aria-current="page"
                  to="/comment"
                  activeClassName="active__nav__link"
                >
                  Comment
                </NavLink>
                <div className = "login" style = {{mr:"20%"}}>
                <input type ="submit" value= "LOGIN" />
                </div> */}
             
                 
        </div>
      </nav>
    </>
  );
};


export default NavBar;


