import './App.css';
import { Container } from 'react-bootstrap';
import Sidebar from './modules/Components/sidebar.js';
import Main from './modules/Components/Main.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './modules/css/sidebar.css';


const App = props => {
  return (
    <Container fluid>
        <div id='sidebar-wrapper'>
          <Sidebar/>
        </div>
        <div id='main-wrapper'>
          <Main/>
        </div>
    </Container>
  );
}

export default App;