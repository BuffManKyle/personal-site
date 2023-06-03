import "bootstrap/dist/css/bootstrap.min.css";
import "./portfolio.css"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col, Tab, Nav, Card } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Aiartwork, Website1, Website2, Website3 } from './assets/projects';

function Portfolio() {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleClose2 = () => setShow2(false);
    const handleClose3 = () => setShow3(false);
    const handleClose4 = () => setShow4(false);

    const handleShow1 = () => setShow1(true);
    const handleShow2 = () => setShow2(true);
    const handleShow3 = () => setShow3(true);
    const handleShow4 = () => setShow4(true);


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
                                        <Nav.Link activeclassname="active" eventKey="first">Four One O Detailing</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="Nav-tab">
                                        <Nav.Link eventKey="second">Soul Centered</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="Nav-tab">
                                        <Nav.Link eventKey="third">Long Cut Landscaping</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="Nav-tab">
                                        <Nav.Link eventKey="fourth">AI Artwork</Nav.Link>
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
                                        <Website3 />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth">
                                        <Aiartwork />
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
                    <Nav.Link>Four One O Detailing</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Offcanvas className="Offcanvas-portfolio-mobile" show={show1} onHide={handleClose1}>
                    <Offcanvas.Header>
                    <Offcanvas.Title></Offcanvas.Title>
                    <button className="Nav-offcanvas" onClick={handleClose1}><FontAwesomeIcon icon={faDoorOpen} /></button>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Website1 />
                    </Offcanvas.Body>
                </Offcanvas>


                <Nav variant="pills" className="flex-column" onClick={handleShow2} >
                        <Nav.Item className="Nav-tab">
                        <Nav.Link>Soul Centered</Nav.Link>
                        </Nav.Item>
                    </Nav>

                <Offcanvas className="Offcanvas-portfolio-mobile"show={show2} onHide={handleClose2}>
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
                    <Nav.Link>Long Cut Landscaping</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Offcanvas className="Offcanvas-portfolio-mobile" show={show3} onHide={handleClose3}>
                    <Offcanvas.Header>
                    <Offcanvas.Title></Offcanvas.Title>
                    <button className="Nav-offcanvas" onClick={handleClose3}><FontAwesomeIcon icon={faDoorOpen} /></button>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Website3 />
                    </Offcanvas.Body>
                </Offcanvas>


                <Nav variant="pills" className="flex-column" onClick={handleShow4} >
                        <Nav.Item className="Nav-tab">
                        <Nav.Link >AI Artwork</Nav.Link>
                        </Nav.Item>
                    </Nav>

                <Offcanvas className="Offcanvas-portfolio-mobile" show={show4} onHide={handleClose4}>
                    <Offcanvas.Header>
                    <Offcanvas.Title></Offcanvas.Title>
                    <button className="Nav-offcanvas" onClick={handleClose4}><FontAwesomeIcon icon={faDoorOpen} /></button>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Aiartwork/>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>

        </Container>
  );

}

export default Portfolio;