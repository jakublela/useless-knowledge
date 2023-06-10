import React, {useState} from 'react';
import { Nav, Button} from 'react-bootstrap';
import './sidebar.css';
import pfp from './default_pfp.jpg';
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Popup from '../Components/Popup.js';
import FB from '../images/Facebook.svg';
import Gugel from '../images/Google.svg';
import iOS from '../images/iOS.svg';
import Majkrosoft from '../images/Microsoft.svg';
import Twitter from '../images/Twitter.svg';

const Sidebar = props => {
    const [buttonPopup1, setButtonPopup1] = useState(false);
    const [buttonPopup2, setButtonPopup2] = useState(false);
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('The name you entered was: ${name}')
    }

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
                    <MenuButton itemTitle='Lose braincells' className='dropdown'/>
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
                            <form className='form' id='loginForm' onSubmit={handleSubmit}>
                                <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='user-in' placeholder='Username/E-mail'/><br/>
                                <input type='password' className='user-in' placeholder='Password'/><br/>
                                <button type='submit' className='login-btn' onClick={() => setButtonPopup1(false)}>Log in</button><br/>
                            </form>
                            <div className="logos">
                                <img src={Gugel} className='logo' alt='google'/>
                                <img src={Twitter} className='logo' alt='twitter'/>
                                <img src={Majkrosoft} className='logo' alt='microsoft'/>
                                <img src={iOS} className='logo' alt='apple'/>
                                <img src={FB} className='logo' alt='facebook'/>
                            </div>
                            <p className='smol-Text'>don’t have an account? you can register<button className='smol-btn' onClick={() => setButtonPopup2(true)}><u><b>here</b></u></button></p>
                            <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}>
                                <form className='form'>
                                    <input type='text' className='user-in' placeholder='Username'/><br/>
                                    <input type='text' className='user-in' placeholder='E-mail'/><br/>
                                    <input type='text' className='user-in' placeholder='Password'/><br/>
                                    <input type='password' className='user-in' placeholder='Confirm Password'/><br/>
                                    <button type='submit' className='login-btn' onClick={() => setButtonPopup2(false) || setButtonPopup1(false)}>Register</button><br/>
                                </form>
                            </Popup>
                        </Popup>
                    </div>
                </footer>
            </nav>
        </Nav>
    );
};

function MenuButton({itemTitle}) {
    const navigate = useNavigate();

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