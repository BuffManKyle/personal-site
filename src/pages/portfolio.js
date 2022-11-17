import "bootstrap/dist/css/bootstrap.min.css";
import "./portfolio.css"
import { Container, Row, Col, Tab, Nav, Card } from 'react-bootstrap';
import { Blenderwork, Website1, Website2 } from './assets/projects';

function Portfolio() {
    return (
        <Container fluid>
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
        </Container>
  );

}

export default Portfolio;