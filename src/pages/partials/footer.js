import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from 'react-bootstrap';


function Footer() {
    return(
            <div className='footerbody'>
                <Container>
                    <Row className="text-center">
                        <Col>
                            <p>© 2024 | Designed by Kyle Katzenmaier</p>
                        </Col>
                    </Row>
                </Container>
            </div>
    );
}

export default Footer;