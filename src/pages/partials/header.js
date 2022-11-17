import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faDoorOpen, faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas, Col, Row,} from 'react-bootstrap';
import { Link } from 'react-scroll'

function Header() {
  const [show, setShow] = useState(false);
  const offsetValue = -65;

const toggleOffCanvas = () => {
  setShow((show) => !show);
};


    return (
      <>
        {[false].map((expand) => (
          <Navbar key={expand} expand={expand} className="mb-3 Navbar-background" fixed="top">
            <Container>
              <button className="Nav-offcanvas" onClick={toggleOffCanvas}><FontAwesomeIcon icon={faBars} /></button>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
                show={show}
                onHide={toggleOffCanvas}
              >
                <Offcanvas.Header className="Nav-Offcanvas">
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <Navbar.Brand className="Brand-name-offcanvas" href="/">Kyle Katzenmaier</Navbar.Brand>
                    <button className="Nav-offcanvas" onClick={toggleOffCanvas}><FontAwesomeIcon icon={faDoorOpen} /></button>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Nav-Offcanvas">
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <ul className="nav-menu">
                      <li className="nav-item"> 
                        <Link to="home" spy={true} smooth={true} duration={100} offset={offsetValue} onClick={toggleOffCanvas}>Home</Link> 
                        </li>
                      <li className="nav-item"> 
                        <Link to="portfolio" spy={true} smooth={true} duration={100} offset={offsetValue} onClick={toggleOffCanvas}>Portfolio</Link> 
                        </li>
                      <li className="nav-item"> 
                        <Link to="about" spy={true} smooth={true} duration={100} offset={offsetValue} onClick={toggleOffCanvas}>About</Link>
                        </li>
                      <li className="nav-item"> 
                        <Link to="skills" spy={true} smooth={true} duration={100} offset={offsetValue} onClick={toggleOffCanvas}>Background</Link>
                        </li>
                      <li className="nav-item"> 
                        <Link to="contact" spy={true} smooth={true} duration={100} offset={offsetValue} onClick={toggleOffCanvas}>Contact</Link>
                        </li>
                    </ul>

                    <Row>
                      <Col>
                        <a className="icon-Nav" target="_blank" rel="noopener noreferrer" href="https://github.com/BuffManKyle"><FontAwesomeIcon icon={faGithub} /></a>
                        <a className="icon-Nav" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kylekatzenmaier/"><FontAwesomeIcon icon={faLinkedin} /></a>
                      </Col>
                    </Row> 
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
              <Col lg={11} >
              <Navbar.Brand className="Brand-name-nav"  href="/">Kyle Katzenmaier</Navbar.Brand>
              </Col>
              
            </Container>
          </Navbar>
        ))}
      </>
    );
}

export default Header;