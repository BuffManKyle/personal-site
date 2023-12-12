import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';

function Resume() {
    return (
                <Container>
                    <Row className="justify-content-center" style={{flex:1}}>
                        <Col className="text-center">
                            <h2 className="h2-gradient">Background</h2>
                        </Col>
                    </Row>
                    <Container className="">
                        <Row  className="justify-content-around">
                            <Col className="text-center shadows p-3 mb-5 rounded" sm={12} lg={5}>
                                <h3 className="">Education</h3>
                                <h5>Bachelor of Science in Comunication Studies - Minor in Business</h5>
                                <p>Towson University, Towson MD (August 2021)</p>
                            </Col>
                            <Col className="text-center shadows p-3 mb-5 rounded"  sm={12} lg={5}>
                                <h3>Programing Languages and Frameworks</h3>
                                <h5 className="skill-list">JavaScript, CSS, HTML, Nodejs, Python, React, Express.js, Bootstrap</h5>
                            </Col>
                            <Col className="text-center shadows p-3 mb-5 rounded"  sm={12} lg={5}>
                                <h3>Programs</h3>
                                <h5 className="skill-list">Amazon Web Services (AWS), EC2, Git, GitHub, Microsoft Office, WordPress, WooCommerce </h5>
                            </Col>
                            <Col className="text-center shadows p-3 mb-5 rounded" sm={12} lg={5}>
                                <h3>Certifications</h3>
                                <h5 className="skill-list">CompTIA A+ Certification</h5>
                                <h5 className="skill-list">Certified ScrumMaster (CSM) – Scrum Alliance</h5>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row className="justify-content-around">
                            <Col className="text-center shadows p-3 mb-5 rounded"  sm={12} lg={5}>
                                <h3 className="">Operating Systems</h3>
                                <h5>Windows OS</h5>
                            </Col>
                        </Row>
                    </Container>
                </Container>
    );
}

export default Resume;