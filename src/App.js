import './App.css';
import { Container } from 'react-bootstrap';
import Sidebar from './modules/sidebar/sidebar.js';
import Main from './modules/Main/Main.js';
import './modules/sidebar/sidebar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Suspense } from 'react';
import Popup from './modules/Components/Popup.js';
import { useState } from 'react';

const App = props => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <Container fluid>
        <div id='sidebar-wrapper'>
          <Sidebar/>
        </div>
        <div id='main-wrapper'>
            <Main/>
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h1>My poopup</h1>
          <p>This is a button triggered popup</p>
        </Popup>
    </Container>
  );
}

export default App;
