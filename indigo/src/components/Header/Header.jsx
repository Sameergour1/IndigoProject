
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/indi-logo.png";
import './header.css';

const nav__link = [
  { path: "/home", display: "Home" },
  { path: "/flights", display: "Flights" },
  { path: "/cancel", display: "Cancel Flight" },
  { path: "/update", display: "Update" },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link to="/home">
                <img src={logo} alt="Indigo Airline Logo" />
              </Link>
            </div>
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__link.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink 
                      to={item.path}
                      className={({ isActive }) => (isActive ? 'active__link' : '')}
                      aria-label={item.display}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to="/register" className="nav__btn-link">Register</Link>
                </Button>
                <Button className="btn secondary__btn">
                  <Link to="/login" className="nav__btn-link">Login</Link>
                </Button>
              </div>
              <span className="mobile__menu" aria-label="Mobile Menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

