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
import { useNavigate, NavLink1 } from "react-router-dom";

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
              <NavLink href="/dashboard/">Dashboard</NavLink>
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
                <DropdownItem>
                  {/* {navigate1("/dashboard/premium")} */}
                  <NavLink
                    href="/dashboard/premium"
                    // style={({ isActive }) =>
                    //   isActive ? { textDecoration: "strikethrough" } : undefined
                    // }
                  >
                    Premium Users
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  {/* {navigate1("/dashboard/regular")} */}
                  <NavLink href="/dashboard/regular"> Regular Users </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                {/* <DropdownItem>Reset</DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>React App </NavbarText>
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
