import "bootstrap/dist/css/bootstrap.min.css";
import "./portfolio.css"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col, Tab, Nav, Card } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Blenderwork, Website1, Website2 } from './assets/projects';

function Portfolio() {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(true);

    const handleClose1 = () => setShow1(false);
    const handleClose2 = () => setShow2(false);
    const handleClose3 = () => setShow3(false);

    const handleShow1 = () => setShow1(true);
    const handleShow2 = () => setShow2(true);
    const handleShow3 = () => setShow3(true);

    return (
        <Container fluid>
            <div className="hide-on-mobile">
                <Card className="Card-css">
                    <Card.Header className="text-center h2-gradient" as="h2">Portfolio</Card.Header>
                    <Card.Body>
                        <Tab.Container id="left-tabs" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column" >
                                        <Nav.Item className="Nav-tab">
                                        <Nav.Link activeclassname="active" eventKey="first">Long Cut Landscaping</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="Nav-tab">
                                        <Nav.Link eventKey="second">Soul Centered</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="Nav-tab">
                                        <Nav.Link eventKey="third">3D/Blender Projects</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first" >
                                        <Website1 />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                        <Website2 />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                        <Blenderwork />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Card.Body>
                </Card>
            </div>
            <div className="hide-on-desktop">
                    <h2 className="text-center h2-gradient">Portfolio</h2>
                <Nav variant="pills" className="flex-column" onClick={handleShow1} >
                    <Nav.Item className="Nav-tab">
                    <Nav.Link eventKey="first">Long Cut Landscaping</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Offcanvas className="Offcanvas-portfolio-mobile" eventKey="first" show={show1} onHide={handleClose1}>
                    <Offcanvas.Header>
                    <Offcanvas.Title></Offcanvas.Title>
                    <button className="Nav-offcanvas" onClick={handleClose1}><FontAwesomeIcon icon={faDoorOpen} /></button>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Website1/>
                    </Offcanvas.Body>
                </Offcanvas>


                <Nav variant="pills" className="flex-column" onClick={handleShow2} >
                        <Nav.Item className="Nav-tab">
                        <Nav.Link eventKey="second">Soul Centered</Nav.Link>
                        </Nav.Item>
                    </Nav>

                <Offcanvas className="Offcanvas-portfolio-mobile" eventKey="second" show={show2} onHide={handleClose2}>
                    <Offcanvas.Header>
                    <Offcanvas.Title></Offcanvas.Title>
                    <button className="Nav-offcanvas" onClick={handleClose2}><FontAwesomeIcon icon={faDoorOpen} /></button>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Website2/>
                    </Offcanvas.Body>
                </Offcanvas>

                <Nav variant="pills" className="flex-column" onClick={handleShow3} >
                        <Nav.Item className="Nav-tab">
                        <Nav.Link  eventKey="third">3D/Blender Projects</Nav.Link>
                        </Nav.Item>
                    </Nav>

                <Offcanvas className="Offcanvas-portfolio-mobile" eventKey="third" show={show3} onHide={handleClose3}>
                    <Offcanvas.Header>
                    <Offcanvas.Title></Offcanvas.Title>
                    <button className="Nav-offcanvas" onClick={handleClose3}><FontAwesomeIcon icon={faDoorOpen} /></button>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Blenderwork/>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>

        </Container>
  );

}

export default Portfolio;