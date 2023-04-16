import './App.css';
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import Sidebar from './modules/sidebar/sidebar.js';
import './modules/sidebar/sidebar.css';

const App = props => {
  return (
    <Container fluid>
        <Col id="sidebar-wrapper" style={{color: 'red'}}>
          <Sidebar/>
        </Col>
    </Container>
  );
}

export default App;
