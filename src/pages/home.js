import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css'


function Home() {
    return (
                <Container fluid>
                    <div className="backlight-section">
                        <Container >
                            <Row className="justify-content-center" style={{flex:1}}>
                                <Col className="text-center">
                                    <div className="home-space">
                                        <h1 className="home-name-intro">Introducing</h1>
                                        <h1 className="home-name">KYLE</h1>
                                        <h1 className="home-name">KATZENMAIER</h1>
                                        <h2 className="home-name">Web Developer</h2>
                                    </div>
                                    
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
                
    );
}

export default Home;