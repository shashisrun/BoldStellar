import React, {Component} from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class LeftNavbar extends Component{
render(){
 return(
     <React.Fragment>
        <LinkContainer to='/blog'>
            <Nav.Link>Blog</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/menu'>
            <Nav.Link>Menu</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/page'>
            <Nav.Link>Page</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/slider'>
            <Nav.Link>Slider</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/user'>
            <Nav.Link>User</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/role'>
            <Nav.Link>Role</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/permission'>
            <Nav.Link>Permission</Nav.Link>
        </LinkContainer>
    </React.Fragment>
)   
}
}

export default LeftNavbar