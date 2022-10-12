import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js'

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
            Last Releases
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Button type="button" id="popOverWishList" onClick={toggle}>
              {wishListDb.length} films
            </Button>
            <Popover
              placement="bottom"
              isOpen={isOpenedPopover}
              target="popOverWishList"
            >
              <PopoverHeader>Wishlist</PopoverHeader>
              <PopoverBody>{wishListDbStyled}</PopoverBody>
            </Popover>
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
