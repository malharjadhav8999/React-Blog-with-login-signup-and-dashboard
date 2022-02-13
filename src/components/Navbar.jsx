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
    <div color="dark" outline classname="border border-dark">
      <Navbar
        color="light"
        expand="md "
        light
        className="p-1 m-1"
      >
        <NavbarBrand href="/">Homepage</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              {/* <NavLink href="/dashboard/">Dashboard</NavLink> */}
              <NavLink
                onClick={() => {
                  navigate1("/dashboard");
                }}
              >
                Dashboard
                <NavItem></NavItem>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => {
                  console.log(navigate1);

                  navigate1("/dashboard/blogs");
                  console.log(navigate1);
                }}
              >
                Blogs
              </NavLink>
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
                    onClick={() => {
                      navigate1("/dashboard/premium");
                    }}
                  >
                    Premium Users
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  {/* {navigate1("/dashboard/regular")} */}
                  <NavLink
                    onClick={() => {
                      navigate1("/dashboard/regular");
                    }}
                  >
                    {" "}
                    Regular Users{" "}
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                {/* <DropdownItem>Reset</DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            <h4>React App {"  "}</h4>
          </NavbarText>

          <Button
            onClick={() => {
              localStorage.removeItem("token");
              navigate1("/login");
              //setIsLogin(false)
            }}
            color="danger"
          >
            Logout
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navbar1;
