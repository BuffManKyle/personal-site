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
                    <Row  className="text-center">
                        <Col sm={12} lg={6}>
                            <h3 className="">Education</h3>
                            <h5>Bachelore of Science in Comunication Studies - Minor of Business</h5>
                            <p>Towson University, Towson MD (August 2021)</p>
                            
                        </Col>
                        <Col sm={12} lg={6}>
                            <h3 className="">Programing Languages and Frameworks</h3>
                            <h5>JavaScript, CSS, HTML, Nodejs, Python, </h5>
                            <h5>React, Express.js, Bootstrap</h5>
                        </Col>
                        <Col sm={12} lg={6}>
                            <h3 className="">Programs</h3>
                            <h5>Amazon Web Services (AWS), EC2, Git, GitHub, Microsoft Office, </h5>
                            <h5> WordPress, WooCommerce</h5>
                        </Col>
                        <Col sm={12} lg={6}>
                            <h3 className="">Operating System</h3>
                            <h5>Windows OS</h5>
                        </Col>
                    </Row>
                </Container>
    );
}

export default Resume;