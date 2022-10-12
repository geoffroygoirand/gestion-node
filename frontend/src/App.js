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
    <Nav />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bienvenue dans l'application de gestion !
        </a>
      </header>
    </div></>
  );
}

export default App;
