import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const Navbar1 = ({ setIsLogin }) => {
  let navigate1 = useNavigate();

  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">Homepage</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/Dashboard/">Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blogs/">Blogs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/malharjadhav8999/React_App">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Premium Users</DropdownItem>
                <DropdownItem>Regular Users</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
          <Button
            onClick={() => {
              localStorage.removeItem("token");
              navigate1("/login");
              //setIsLogin(false)
            }}
          >
            Logout
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navbar1;
