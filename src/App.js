import './App.css';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import Sidebar from './modules/sidebar/sidebar.js';
import './modules/sidebar/sidebar.css';
import SideMenu from './modules/SideMenu/SideMenu.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = props => {
  return (
    <Container fluid>
        <Col id="sidebar-wrapper" style={{color: 'red'}}>
          <Sidebar/>
          <SideMenu/>
        </Col>
    </Container>
  );
}

export default App;
