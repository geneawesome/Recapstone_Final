import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Topnav.css";
import { useNavigate } from "react-router-dom";
function TopNav() {
  const TopNav = useNavigate();

  const menuData = [
    //   {
    //     path:'/home',
    //     name: "Home"
    // },

    // {
    //   path: "/bmi",
    //   name: "BmiCalculator",
    // },
    {
      path: "/about",
      name: "About",
    },

    {
      path: "/contact",
      name: "Contact",
    },
    {
      path: "/services",
      name: "Services",
    },
  ];
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand gymfinity-logo">
          Dolphin Dancer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menuData.map((item) => (
              <NavLink as={Link} to={item.path} key={item.name}>
                <div className="list_item">{item.name}</div>
              </NavLink>
            ))}
          </Nav>
          {
            <Nav className="ms-auto">
              <button
                onClick={() => TopNav("/Booknow")}
                className="btn btn-success"
              >
                Booknow
              </button>
            </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
