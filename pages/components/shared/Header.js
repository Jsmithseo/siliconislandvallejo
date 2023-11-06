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

const MyHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="light" light expand="md">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/#">
              <span className="brandName">Onyx Creative Labs</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink href="/about">Services & Products</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Lessons">Case Studies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact</NavLink>
          </NavItem> */}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MyHeader;
