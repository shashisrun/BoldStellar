import React, {Component} from 'react'
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

class RightNavbar extends Component{
render(){
 return(
     <React.Fragment>
        <LinkContainer to='/login'>
            <Nav.Link>Login</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/register'>
            <Nav.Link>Register</Nav.Link>
        </LinkContainer>
    </React.Fragment>
)   
}
}

export default RightNavbar