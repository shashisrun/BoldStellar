import React, {Component} from 'react'
import { Navbar, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class Brand extends Component{
render(){
 return(
    <Navbar.Brand>
        <LinkContainer to='/'>
            <Image src='/images/Logo.png' alt='BOLD Stellar' className='w-100' />
        </LinkContainer>
    </Navbar.Brand>
)   
}
}

export default Brand