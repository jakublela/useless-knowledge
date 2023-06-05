import React, {useState, useRef} from 'react';
import { Nav, Button} from 'react-bootstrap';
import './sidebar.css';
import pfp from './default_pfp.jpg';
import { useNavigate } from 'react-router-dom';
import Popup from '../Components/Popup.js';

const Sidebar = props => {
    const [show, setShow] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);
    const target = useRef(null);

    return (
        <Nav className="sidebar-sticky">
            <nav className="sidebar">
                <p>✨Useless✨<br/>✨Knowledge✨</p>
                <hr/>
                <div className='navigation'>
                    <MenuButton itemTitle='Random' className='dropdown'/>
                    <MenuButton itemTitle='Categories' className='dropdown'/>
                    <MenuButton itemTitle='Create' className='dropdown'/>
                    <MenuButton itemTitle='Saved' className='dropdown'/>
                    <MenuButton itemTitle='Loose braincells' className='dropdown'/>
                </div>
                <footer className="ooger">
                    <hr/>
                    <div className="user-info">
                        <img src={pfp} className="user" alt="pfp"/>
                        <p className="user">
                            Username<br/>
                            <button className="login-pop-btn" onClick={() => setButtonPopup(true)}>Log in</button>
                        </p>
                        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                            <input type='text' className='user-in' placeholder='Username'/><br/>
                            <input type='password' className='user-in' placeholder='Password'/><br/>
                            <button className='login-btn' onClick={() => setButtonPopup(false)}>Log in</button>
                        </Popup>
                    </div>
                </footer>
            </nav>
        </Nav>
    );
};

function MenuButton({itemTitle}) {
    let navigate = useNavigate();

    return (
        <Nav.Item>
            <Button 
                className='dropdown-button' 
                variant='secondary' 
                onClick={() => navigate(`/${itemTitle.toLowerCase()}`)}>
                    {itemTitle} 
                </Button>
        </Nav.Item>
        )
    
}

export default Sidebar;