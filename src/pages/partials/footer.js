import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from 'react-bootstrap';


function Footer() {
    return(
            <div className='footerbody'>
                <Container>
                    <Row className="text-center">
                        <Col>
                            <p>Designed by Kyle Katzenmaier</p>
                            <p>Copyright 2022</p>
                        </Col>
                    </Row>
                </Container>
            </div>
    );
}

export default Footer;