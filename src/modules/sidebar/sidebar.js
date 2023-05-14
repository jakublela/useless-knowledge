import React from 'react';
import { Nav } from 'react-bootstrap';
import './sidebar.css';
import pfp from './default_pfp.jpg';

const Sidebar = props => {
    return (
        <Nav className="col-md-12 d-none d-md-block sidebar">
            <div className="sidebar-sticky"></div>
            <p>✨Useless✨<br/>✨Knowledge✨</p>
            <hr/>
            <Nav.Item>
                <Nav.Link eventKey="random">Random</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="category">Categories</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="add">Add your own</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="saved">Saved</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled">h2loose braincells 101</Nav.Link>
            </Nav.Item>
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

export default Sidebar;