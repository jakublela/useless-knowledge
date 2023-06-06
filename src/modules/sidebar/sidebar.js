import React, {useState, useRef} from 'react';
import { Nav, Button} from 'react-bootstrap';
import './sidebar.css';
import pfp from './default_pfp.jpg';
import { useNavigate } from 'react-router-dom';
import Popup from '../Components/Popup.js';
import FB from '../images/Facebook.svg';
import Gugel from '../images/Google.svg';
import iOS from '../images/iOS.svg';
import Majkrosoft from '../images/Microsoft.svg';
import Twitter from '../images/Twitter.svg';

const Sidebar = props => {
    const [buttonPopup1, setButtonPopup1] = useState(false);
    const [buttonPopup2, setButtonPopup2] = useState(false);

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
                            <button className="login-pop-btn" onClick={() => setButtonPopup1(true)}>Log in</button>
                        </p>
                        <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
                            <input type='text' className='user-in' placeholder='Username/E-mail'/><br/>
                            <input type='password' className='user-in' placeholder='Password'/><br/>
                            <button className='login-btn' onClick={() => setButtonPopup1(false)}>Log in</button><br/>
                            <div className="logos">
                                <img src={Gugel} className='logo' />
                                <img src={Twitter} className='logo' />
                                <img src={Majkrosoft} className='logo' />
                                <img src={iOS} className='logo' />
                                <img src={FB} className='logo' />
                            </div>
                            <p className='smol-Text'>don’t have an account? you can register<button className='smol-btn' onClick={() => setButtonPopup2(true)}><u><b>here</b></u></button></p>
                            <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}>
                                <input type='text' className='user-in' placeholder='Username'/><br/>
                                <input type='text' className='user-in' placeholder='E-mail'/><br/>
                                <input type='text' className='user-in' placeholder='Password'/><br/>
                                <input type='password' className='user-in' placeholder='Confirm Password'/><br/>
                                <button className='login-btn' onClick={() => setButtonPopup2(false) || setButtonPopup1(false)}>Register</button><br/>
                            </Popup>
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