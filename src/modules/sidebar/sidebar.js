import React from 'react';
import { Nav } from 'react-bootstrap';
import './sidebar.css';

const Sidebar = props => {
    return (
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link eventKey="home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="blog">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled">Disabled</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Sidebar;