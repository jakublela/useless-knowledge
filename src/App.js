import './App.css';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import Sidebar from './modules/sidebar/sidebar.js';
import './modules/sidebar/sidebar.css';

const App = props => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2} id="sidebar-wrapper">
          <Sidebar/>
        </Col>
        <Col xs={10} id="page-content-wrapper">
          This is a test
        </Col>
      </Row>
    </Container>
  );
}

export default App;
