import React from 'react';
import { Container, Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap';
import './SideMenu.css';

function SideMenu() {
    return (
        <Navbar variant='dark' bg='dark' expand='lg' className='navbar'>
            <Container className='navbar-wrapper'>
                <Navbar.Brand>
                    <p>✨Useless✨<br/>✨Knowledge✨</p>
                </Navbar.Brand>
                    <Nav>
                        <DropItem itemTitle='Random'/>
                        <DropItem itemTitle='Categories'/>
                        <DropItem itemTitle='Add your own'/>
                        <DropItem itemTitle='Saved'/>
                        <DropItem itemTitle='Loose braincells'/>
                    </Nav>
            </Container>
        </Navbar>
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

export default SideMenu;