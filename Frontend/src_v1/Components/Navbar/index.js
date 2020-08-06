import React, {Component} from 'react'
import Brand from './Brand'
import LeftNavbar from './LeftNavbar'
import { Navbar, Nav } from 'react-bootstrap';
import RightNavbar from './RightNavbar';

class CreateNavbar extends Component{
render(){
 return(
    <Navbar bg="light" expand="lg">
        <Nav>
            <Brand />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <LeftNavbar />
                <RightNavbar />
            </Navbar.Collapse>
        </Nav>
    </Navbar>
)   
}
}

export default CreateNavbar