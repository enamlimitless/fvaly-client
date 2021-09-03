import logo from 'assets/images/fvaly.png';
import React from 'react';
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { BiBell, BiEnvelope } from 'react-icons/bi';
import { BsPhone } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaBars } from 'react-icons/fa';
import { FiMessageSquare, FiPhoneCall, FiShoppingBag } from 'react-icons/fi';
import { GrSearch } from 'react-icons/gr';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      {/* TopNavbar */}
      <div className="top-bar py-2 bg-light border-bottom">
        <Container className="d-flex align-content-center justify-content-between">
          <ul className="list-unstyled d-flex align-items-center gap-4">
            <li>
              <FiPhoneCall />
              <a href="tel:01222954962">01222954962</a>
            </li>
            <li>
              <BiEnvelope />
              <a href="mailto:support@fvaly.com.bd">support@fvaly.com.bd</a>
            </li>
          </ul>
          <div>
            <BsPhone />
            <a href="https://play.google.com/store/apps/details?id=bd.com.fvaly.fvalyshop">
              Save big on our app!
            </a>
          </div>
        </Container>
      </div>
      {/* Middle Navbar */}
      <div className="middle-navbar">
        <Container>
          <div className="d-flex text-align-center py-3 gap-5 align-items-center">
            <Link to="/">
              <img className="logo" src={logo} alt="fvaly" />
            </Link>
            <InputGroup>
              <FormControl
                className="border black"
                placeholder="Search for..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-dark px-4 active" id="button-addon2">
                <GrSearch className="search" />
              </Button>
            </InputGroup>
            <ul className="list-unstyled d-flex gap-4 icon-list">
              <li>
                <Link to="/">
                  <FiShoppingBag />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <BiBell />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FiMessageSquare />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <CgProfile />
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="bg-danger text-light px-4 py-2" href="/">
            <FaBars /> CATEGORIES <IoIosArrowDown />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">All Shops</Nav.Link>
            <Nav.Link href="/">Campaigns</Nav.Link>
            <Nav.Link href="/">Top-up</Nav.Link>
            <Nav.Link href="/">Express</Nav.Link>
            <Nav.Link href="/">T10</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
