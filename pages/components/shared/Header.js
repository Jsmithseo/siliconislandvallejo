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

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/#" className="text-white">
              <span className="brandName">Onyx Creative Labs</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about" className="text-white">
              Our Story
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/how-it-works" className="text-white">
              How it Works
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact" className="text-white">
              Start a Project
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/donate" className="text-white">
              Donate
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MyHeader;
