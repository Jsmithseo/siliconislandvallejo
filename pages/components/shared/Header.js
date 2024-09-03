import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Collapse,
  NavbarToggler,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
    color: 'white',
  };

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              href="/#"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              <span className="brandName">Onyx Creative Labs</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="/about"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              Our Story
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="/how-it-works"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              How it Works
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="/contact"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              Start a Project
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="/donate"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              Donate
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MyHeader;
