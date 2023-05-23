import React from 'react';
import {Dropdown, DropdownButton, Nav} from 'react-bootstrap';
import './sidebar.css';
import pfp from './default_pfp.jpg';

const Sidebar = props => {
    return (
        <Nav className="sidebar-sticky">
            <nav className="sidebar">
                <p>✨Useless✨<br/>✨Knowledge✨</p>
                <hr/>
                <DropItem itemTitle='Random' className='dropdown'/>
                <DropItem itemTitle='Categories' className='dropdown'/>
                <DropItem itemTitle='Create' className='dropdown'/>
                <DropItem itemTitle='Saved' className='dropdown'/>
                <DropItem itemTitle='Loose braincells' className='dropdown'/>
            </nav>
            <footer>
                <hr/>
                <div className="user-info">
                    <img src={pfp} className="user" alt="pfp"/>
                    <p className="user">Username</p>
                </div>
            </footer>
        </Nav>
    );
};

function DropItem({itemTitle}) {
    return (
        <Nav.Item>
            <DropdownButton drop='down-centered' className='dropdown-button' variant='secondary' title={itemTitle}>
                <Dropdown.Item>Trivia</Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item>Facts</Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item>Riddles</Dropdown.Item>
            </DropdownButton>
        </Nav.Item>
    )
    
}

export default Sidebar;