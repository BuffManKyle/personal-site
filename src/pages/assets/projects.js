import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';
import Pier from './images/pier002.png';
import Sword from './images/finalcave001.png';
import Lamp from './images/Lamp001.png';
import Interior from './images/Room001.png';
import Longcut1 from './images/longcut1.png';
import Longcut2 from './images/longcut2.png';
import Longcut3 from './images/longcut3.png';
import Longcutm1 from './images/longcutmobile1.png'
import Longcutm2 from './images/longcutmobile2.png'
import Longcutm3 from './images/longcutmobile3.png'
import Soul1 from './images/soul1.PNG';
import Soul2 from './images/soul2.PNG';
import Soul3 from './images/soul3.PNG';
import Soulm1 from './images/soulmobile1.PNG';
import Soulm2 from './images/soulmobile2.PNG';
import Soulm3 from './images/soulmobile3.PNG';

function Website1() {
    return (
            <Container className="Tab-longcut">
                <Row>
                    <Col sm={12} lg={8}>
                        <img className="d-block w-100 Tab-image" src={Longcut1 } alt="longcut1"/>
                    </Col>
                    <Col sm={12} lg={3}>
                        <h2 className="Tab-heading">Long Cut Landscaping</h2>
                        <a href="http://www.longcutlandscaping.com/" target="_blank" rel="noreferrer noopener"><h5>Check it out here!</h5></a>
                            <p className="Tab-content">Web Design</p>
                            <p className="Tab-content">Google Indexing</p>
                            <p className="Tab-content">AWS Hosting</p>
                            <p className="Tab-content">AWS Simple Email Service</p>
                        
                        
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} lg={6}>
                        <img className="d-block w-100 Tab-image" src={Longcut2 } alt="longcut2"/>
                    </Col>
                    <Col sm={12} lg={6}>
                        <img className="d-block w-100 Tab-image" src={Longcut3 } alt="longcut3"/>
                    </Col>
                </Row>

                <Row>
                    <Col sm={4} lg={4}>
                        <img className="d-block w-75 mx-auto Tab-image" src={Longcutm1 } alt="longcutmobile1"/>
                    </Col>
                    <Col sm={4} lg={4}>
                        <img className="d-block w-75 mx-auto Tab-image" src={Longcutm2 } alt="longcutmobile2"/>
                    </Col>
                    <Col sm={4} lg={4}>
                        <img className="d-block w-75 mx-auto Tab-image" src={Longcutm3 } alt="longcutmobile3"/>
                    </Col>
                </Row>
            </Container>
                    
    );
}


function Website2() {
    return (
            <Container className="Tab-soulcentered">
                <Row>
                    <Col sm={12} lg={8}>
                        <img className="d-block w-100 Tab-image" src={Soul1 } alt="Soulcentered1"/>
                    </Col>
                    <Col sm={12} lg={3}>
                        <h2 className="Tab-heading">Soul Centered</h2>
                        <a href="https://soulcentered.com/" target="_blank" rel="noreferrer noopener"><h5>Check it out here!</h5></a>
                            <p className="Tab-content">Wordpress and Woocommerce</p>
                            <p className="Tab-content">SEO Optimization</p>
                            <p className="Tab-content">Plugins</p>
                            <p className="Tab-content">Web Design</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} lg={6}>
                        <img className="d-block w-100 Tab-image" src={Soul2 } alt="Soulcentered2"/>
                    </Col>
                    <Col sm={12} lg={6}>
                        <img className="d-block w-100 Tab-image" src={Soul3 } alt="Soulcentered3"/>
                    </Col>
                </Row>

                <Row>
                    <Col sm={4} lg={4}>
                        <img className="d-block w-75 mx-auto Tab-image" src={Soulm1 } alt="Soulcenteredmobile1"/>
                    </Col>
                    <Col sm={4} lg={4}>
                        <img className="d-block w-75 mx-auto Tab-image" src={Soulm2 } alt="Soulcenteredmobile2"/>
                    </Col>
                    <Col sm={4} lg={4}>
                        <img className="d-block w-75 mx-auto Tab-image" src={Soulm3 } alt="Soulcenteredmobile3"/>
                    </Col>
                </Row>
            </Container>
    )
}

function Blenderwork() {
    return (
            <Container className="Tab-blender">
                <Row>
                    <Col sm={12} lg={8}>
                        <img className="d-block w-100 Tab-image" src={Interior } alt="Blender Interior"/>
                    </Col>
                    <Col sm={12} lg={3}>
                        <h2 className="Tab-heading">Blender Projects</h2>
                            <p className="Tab-content">Wordpress and Woocommerce</p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={4} lg={4}>
                        <img className="d-block w-75 mx-auto Tab-image" src={Sword } alt="Blender Sword"/>
                    </Col>
                    <Col sm={4} lg={4}>
                        <img className="d-block w-75 mx-auto Tab-image" src={Lamp} alt="Blender Lamp"/>
                    </Col>
                    <Col sm={4} lg={4}>
                        <img className="d-block w-75 mx-auto Tab-image" src={Pier } alt="Blender Pier"/>
                    </Col>
                </Row>

               
            </Container>
    )
}

export {Website1, Website2, Blenderwork};