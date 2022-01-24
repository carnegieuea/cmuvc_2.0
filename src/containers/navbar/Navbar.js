import React from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

export default class MainNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand tag={Link} to="/" className="text-white">
            <h4 className="mb-0 font-weight-bold">CMU Venture Challenge</h4>
            <p className="mb-0" style={{ fontSize: "0.75rem" }}>
              Powered by Accel | Round 1 Closes March 7, 2022
            </p>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="border-0" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar style={{ fontSize: "0.9rem" }}>
              <NavItem className="mx-md-2">
                <NavLink tag={Link} to="/" className="text-light">
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="mx-md-2">
                <NavLink tag={Link} to="/details" className="text-light">
                  Details
                </NavLink>
              </NavItem>
              <NavItem className="mx-md-2">
                <NavLink tag={Link} to="/sponsor" className="text-light">
                  Sponsor
                </NavLink>
              </NavItem>

              <NavItem className="mx-md-2">
                <NavLink tag={Link} to="/contact" className="text-light">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem className="mx-md-2">
                <NavLink tag={Link} to="/faq" className="text-light">
                  FAQ
                </NavLink>
              </NavItem>
              <NavItem className="mx-md-2">
                <Button color="warning" tag={Link} to="/apply" className="px-4">
                  Apply
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
