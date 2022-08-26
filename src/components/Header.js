import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,NavbarBrand,NavLink ,NavbarToggler ,Navbar,NavbarText,NavItem ,Collapse,UncontrolledDropdown,DropdownToggle} from 'reactstrap';
import { Link } from 'react-router-dom';
const reset = () => {
  localStorage.clear();
}
  const Header=()=>{
  return (
    
<div>
  <Navbar className='navbar'
    
    expand="lg"
    fixed='top'
    background-color= "#e3f2fd"
    light
  >
    <NavbarBrand href="/">
      PRICELIST
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <Link to="" style={{textDecoration: 'none'}}>
          <NavLink >
           Home
          </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <NavLink href="">
            Contact Us
          </NavLink>
        </NavItem>
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            About Us
          </DropdownToggle>
          
        
        </UncontrolledDropdown>
      </Nav>
      {/* make it a button */}
      {/* localStorage.removeItem("city") */}
      <Link to="/" style={{textDecoration: 'none'}} >
      <NavbarText onClick={reset}>
        Signout
      </NavbarText>
      </Link>
    </Collapse>
  </Navbar>
</div>
  )
}
export default Header;