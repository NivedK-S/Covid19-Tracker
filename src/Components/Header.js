import React,{Component} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">COVID-19</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/india">India</Link>
            <Link className="nav-link" to="/world">World</Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
        )
    }
}

export default Header;