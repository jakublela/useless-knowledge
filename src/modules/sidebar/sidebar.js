import React from 'react';
import {Dropdown, DropdownButton, Nav} from 'react-bootstrap';
import './sidebar.css';
import pfp from './default_pfp.jpg';

const Sidebar = props => {
    return (
        <Nav className="col-md-12 d-none d-md-block sidebar">
            <div className="sidebar-sticky">
                <p>✨Useless✨<br/>✨Knowledge✨</p>
                <hr/>
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
                <footer>
                    <hr/>
                    <div className="user-info">
                        <img src={pfp} className="user" alt="pfp"/>
                        <p className="user">Username</p>
                    </div>
                </footer>
            </div>
        </Nav>
    );
};

function DropItem({itemTitle}) {
    return (
        <DropdownButton drop='down-centered' className='dropdown-button' variant='secondary' title={itemTitle}>
            <Dropdown.Item>Trivia</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item>Facts</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item>Riddles</Dropdown.Item>
        </DropdownButton>
    )
    
}

export default Sidebar;