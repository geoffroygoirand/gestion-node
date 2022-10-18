import logo from './logo.svg';
import './App.css';
import Banner from './Banner.js'

import "bootstrap/dist/css/bootstrap.min.css";
//Import FontAwesome for icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
//Import react-bootstrap
import {
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Table,
  Popover,
  PopoverHeader,
  PopoverBody,
  Button,
} from "reactstrap";


function App() {
  return (
    <div style={{ backgroundColor: "black" }}>
    <Container style={{ color: "white" }} >
      <Nav>
        <span className="navbar-brand">
          <img
            src="../images/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </span>
        <NavItem>
          <NavLink href="/" className="nav-link-text">
            Nos derniers chiffres
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Button type="button" id="popOverWishList" onClick={toggle}>
              Nos clients
            </Button>
          </NavLink>
        </NavItem>
      </Nav>
    </Container>
    <br />
    <Container>
     <Banner />
    </Container>
  </div>
  );
}

export default App;
