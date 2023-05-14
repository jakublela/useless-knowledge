import './App.css';
import {Container, Col} from 'react-bootstrap';
import Sidebar from './modules/sidebar/sidebar.js';
import './modules/sidebar/sidebar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = props => {
  return (
    <Container fluid>
        <Col id="sidebar-wrapper">
          <Sidebar/>
        </Col>
    </Container>
  );
}

export default App;
