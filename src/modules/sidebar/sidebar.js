import React, {useState, useRef} from 'react';
import {Dropdown, DropdownButton, Nav, Overlay, Popover, PopoverBody, Button} from 'react-bootstrap';
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
                    <Nav.Item>
                        <DropItem itemTitle='Random' className='dropdown'/>
                    </Nav.Item>
                    <Nav.Item>
                        <DropItem itemTitle='Categories' className='dropdown'/>
                    </Nav.Item>
                    <Nav.Item>
                        <DropItem itemTitle='Create' className='dropdown'/>
                    </Nav.Item>
                    <Nav.Item>
                        <DropItem itemTitle='Saved' className='dropdown'/>
                    </Nav.Item>
                    <Nav.Item>
                        <DropItem itemTitle='Loose braincells' className='dropdown'/>
                    </Nav.Item>
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

function DropItem({itemTitle}) {
    let navigate = useNavigate();

    return (
        <Nav.Item>
            <DropdownButton drop='down-centered' className='dropdown-button' variant='secondary' title={itemTitle}>
                <Dropdown.Item onClick={() => navigate(`/${itemTitle.toLowerCase()}/trivia`)}>Trivia</Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item onClick={() => navigate(`/${itemTitle.toLowerCase()}/facts`)}>Facts</Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item onClick={() => navigate(`/${itemTitle.toLowerCase()}/riddles`)}>Riddles</Dropdown.Item>
            </DropdownButton>
        </Nav.Item>
    )
    
}

export default Sidebar;