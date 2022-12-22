import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'

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
import Romanst from './images/romanstormtrooper.png';
import Spaceinterior from './images/spaceinterior.png';
import Mountain from './images/mountainlandscape.png';
import Cosmic from './images/cosmichorizons.png';
import Volcano from './images/volcano.png';
import Orangeforest from './images/orangeforest.png';
import Watertown from './images/Zhejiang-water-town.png';
import Train from './images/train.png';

function Website1() {
    return (
            <Container className="Tab-longcut">
                <Row>
                    <Col sm={12} lg={3} className="Tab-content hide-on-desktop">
                            <h2 className="Tab-heading">Long Cut Landscaping</h2>
                            <div className="Tab-list">
                                <p>Web Design</p>
                                <p>Google Indexing</p>
                                <p>AWS Hosting</p>
                                <p>AWS Simple Email Service</p> 
                            </div> 
                            <Button className="Portfolio-button"><a href="http://www.longcutlandscaping.com/" target="_blank" rel="noreferrer noopener">
                                Check it out here! <FontAwesomeIcon icon={faSquareArrowUpRight} /></a>
                            </Button>    
                    </Col>
                    <Col sm={12} lg={8}>
                        <img className="d-block w-100 Tab-image" src={Longcut1 } alt="longcut1"/>
                    </Col>
                    
                        <Col sm={12} lg={3} className="Tab-content hide-on-mobile">
                            <h2 className="Tab-heading">Long Cut Landscaping</h2>
                            <div className="Tab-list">
                                <p>Web Design</p>
                                <p>Google Indexing</p>
                                <p>AWS Hosting</p>
                                <p>AWS Simple Email Service</p> 
                            </div>
                                <Button className="Portfolio-button"><a href="http://www.longcutlandscaping.com/" target="_blank" rel="noreferrer noopener">
                                    Check it out here! <FontAwesomeIcon icon={faSquareArrowUpRight} /></a>
                                </Button>     
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
                        <Col sm={12} lg={3} className="Tab-content hide-on-desktop">
                            <h2 className="Tab-heading">Soul Centered</h2>
                            <div className="Tab-list">
                                <p>Wordpress and Woocommerce</p>
                                <p>SEO Optimization</p>
                                <p>Plugins</p>
                                <p>Web Design</p>
                            </div>
                                <Button className="Portfolio-button"><a href="https://soulcentered.com/" target="_blank" rel="noreferrer noopener">
                                    Check it out here! <FontAwesomeIcon icon={faSquareArrowUpRight} /></a>
                                </Button> 
                        </Col>
                    <Col sm={12} lg={8}>
                        <img className="d-block w-100 Tab-image" src={Soul1 } alt="Soulcentered1"/>
                    </Col>
                    
                        <Col sm={12} lg={3} className="Tab-content hide-on-mobile">
                            <h2 className="Tab-heading">Soul Centered</h2>
                            <div className="Tab-list">
                                <p>Wordpress and Woocommerce</p>
                                <p>SEO Optimization</p>
                                <p>Plugins</p>
                                <p>Web Design</p>
                            </div>
                                <Button className="Portfolio-button"><a href="https://soulcentered.com/" target="_blank" rel="noreferrer noopener">
                                    Check it out here! <FontAwesomeIcon icon={faSquareArrowUpRight} /></a>
                                </Button> 
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

function Aiartwork() {
    return (
            <Container className="Tab-AI-art">
                <Row>
                    <Col sm={12} lg={3} className="Tab-content hide-on-desktop">
                        <h2 className="Tab-heading">AI generated artwork with MidJourney</h2>
                        <p className="Tab-content"></p>
                    </Col>

                    <Col sm={12} lg={8}>
                        <img className="d-block w-100 Tab-image" src={Mountain } alt="Blender Interior"/>
                    </Col>
                    
                        <Col sm={12} lg={3} className="Tab-content hide-on-mobile">
                            <h2 className="Tab-heading">AI generated artwork with MidJourney</h2>
                                <p className="Tab-content"></p>
                        </Col>
                    
                </Row>

                <Row>
                    <Col sm={4} lg={4}>
                        <img className="d-block w-75 mx-auto Tab-image" src={Romanst } alt="Blender Sword"/>
                    </Col>
                    <Col sm={4} lg={4}>
                        <img className="d-block w-75 mx-auto Tab-image" src={Spaceinterior } alt="Blender Lamp"/>
                    </Col>
                    <Col sm={4} lg={4}>
                        <img className="d-block w-75 mx-auto Tab-image" src={Cosmic } alt="Blender Pier"/>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col sm={12} lg={8}>
                        <img className="d-block w-100 Tab-image" src={Watertown } alt="Blender Interior"/>
                    </Col>
                </Row>

                <Row>
                    <Col sm={4} lg={4}>
                        <img className="d-block w-75 mx-auto Tab-image" src={Volcano } alt="Blender Sword"/>
                    </Col>
                    <Col sm={4} lg={4}>
                        <img className="d-block w-75 mx-auto Tab-image" src={Orangeforest } alt="Blender Lamp"/>
                    </Col>
                    <Col sm={4} lg={4}>
                        <img className="d-block w-75 mx-auto Tab-image" src={Train } alt="Blender Pier"/>
                    </Col>
                </Row>

               
            </Container>
    )
}

export {Website1, Website2, Aiartwork};