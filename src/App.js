import './App.css';
import { Container } from 'react-bootstrap';
import Sidebar from './modules/sidebar/sidebar.js';
import Main from './modules/Main/Main.js';
import './modules/sidebar/sidebar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Suspense } from 'react';

const App = props => {
  return (
    <Container fluid>
        <div id="sidebar-wrapper">
          <Sidebar/>
        </div>
        <div id='main-wrapper'>
            <Main/>
        </div>
    </Container>
  );
}

export default App;
