import './App.css';
import { Container } from 'react-bootstrap';
import Sidebar from './modules/sidebar/sidebar.js';
import Main from './modules/Main/Main.js';
import './modules/sidebar/sidebar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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

function Data() {
  const userdata = [{name: '', email: '', password: ''}];
  return (
    <div>
      {userdata.map(e =>
        <div>
          {e.name}{e.email}{e.password}
        </div>  
      )}
    </div>
  );
}

export default App;