import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import Fouroneo1 from './images/fouroneo1.PNG';
import Fouroneo2 from './images/fouroneo2.PNG';
import Fouroneo3 from './images/fouroneo3.PNG';
import Fouroneom1 from './images/fouroneom1.PNG';
import Fouroneom2 from './images/fouroneom2.PNG';
import Fouroneom3 from './images/fouroneom3.PNG';
import rn1 from './images/rn1.PNG';
import rn2 from './images/rn2.PNG';
import rn3 from './images/rn3.PNG';
import rnm1 from './images/rnm1.PNG';
import rnm2 from './images/rnm2.PNG';
import rnm3 from './images/rnm3.PNG';
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
import Duck from './images/duck.jpg';
import Pond from './images/pond.jpg';
import Pier01 from './images/pier01.jpg';
import Rock from './images/rock.jpg';
import Flowers from './images/flowers.jpg';
import Sky from './images/sky.jpg';
import Car02 from './images/car02.jpg';
import Mountainfield from './images/MountainFields.jpg'
import JBFerrari from './images/JBFerrari.jpg'
import NSX from './images/NSX.jpg'
import Baybridge from './images/BayBridge.jpg'
import Merc01 from './images/Merc01.jpg'
import Bronco from './images/Bronco.jpg'
import Field01 from './images/Field01.jpg'
import Waterwheel from './images/Waterwheel.jpg'
import SunriseGolden from './images/SunriseGolden.jpg'
import LandscapeGeorgetown from './images/LandscapeGeorgetown.jpg'
import FlowersIdahoFalls from './images/FlowersIdahoFalls.jpg'
import CannonIdahoFalls from './images/CannonIdahoFalls.jpg'
import SunsetBoat from './images/SunsetBoat.jpg'
import SunsetRocks from './images/SunsetRocks.jpg'
import KentIslandCars from './images/KentIslandCars.jpg'
import S2000 from './images/S2000.jpg'
import OrangeDayLily from './images/OrangeDayLily.jpg'
import Petunia from './images/Petunia.jpg'
import Newyorksunrise from './images/Newyorksunrise.jpg'


function Website1() {
    return (
            <Container className="Tab-410 Tab">
                <Row>
                    <Col sm={12} lg={3} className="Tab-content hide-on-desktop">
                            <h2 className="Tab-heading">Four One O Detailing</h2>
                            <div className="Tab-list">
                                <p>Web Design</p>
                                <p>Concept Website</p>
                                <p>Work In Progress</p>
                                <p></p> 
                            </div> 
                            <Button className="Portfolio-button"><a href="https://relaxed-pika-a0b2a9.netlify.app/" target="_blank" rel="noreferrer noopener">
                                Check it out here! <FontAwesomeIcon icon={faSquareArrowUpRight} /></a>
                            </Button>    
                    </Col>
                    <Col sm={12} lg={8}>
                        <img className="d-block w-100 Tab-image" src={Fouroneo1 } alt="Fouroneo1"/>
                    </Col>
                    
                        <Col sm={12} lg={3} className="Tab-content hide-on-mobile">
                            <h2 className="Tab-heading">Four One O Detailing</h2>
                            <div className="Tab-list">
                                <p>Web Design</p>
                                <p>Concept Website</p>
                                <p>Work In Progress</p>
                                <p></p> 
                            </div>
                                <Button className="Portfolio-button"><a href="https://relaxed-pika-a0b2a9.netlify.app/" target="_blank" rel="noreferrer noopener">
                                    Check it out here! <FontAwesomeIcon icon={faSquareArrowUpRight} /></a>
                                </Button>     
                        </Col>
                    
                </Row>
                <Row>
                    <Col sm={12} lg={6}>
                        <img className="d-block w-100 Tab-image" src={Fouroneo2 } alt="Fouroneo2"/>
                    </Col>
                    <Col sm={12} lg={6}>
                        <img className="d-block w-100 Tab-image" src={Fouroneo3 } alt="Fouroneo3"/>
                    </Col>
                </Row>

                <Row>
                    <Col sm={4} lg={4}>
                        <img className="d-block w-75 mx-auto Tab-image" src={Fouroneom1 } alt="Fouroneom1"/>
                    </Col>
                    <Col sm={4} lg={4}>
                        <img className="d-block w-75 mx-auto Tab-image" src={Fouroneom2 } alt="Fouroneom2"/>
                    </Col>
                    <Col sm={4} lg={4}>
                        <img className="d-block w-75 mx-auto Tab-image" src={Fouroneom3 } alt="Fouroneom3"/>
                    </Col>
                </Row>
            </Container>
                    
    );
}

function Website2() {
    return (
            <Container className="Tab-rn Tab">
                <Row>
                    <Col sm={12} lg={3} className="Tab-content hide-on-desktop">
                            <h2 className="Tab-heading">Recovery Network</h2>
                            <div className="Tab-list">
                                <p>Web Design</p>
                                <p>Email Services</p>
                                <p>Work In Progress</p>
                                <p></p> 
                            </div> 
                            <Button className="Portfolio-button"><a href="https://www.recoverynetwork.com/" target="_blank" rel="noreferrer noopener">
                                Check it out here! <FontAwesomeIcon icon={faSquareArrowUpRight} /></a>
                            </Button>    
                    </Col>
                    <Col sm={12} lg={8}>
                        <img className="d-block w-100 Tab-image" src={rn1 } alt="rn1"/>
                    </Col>
                    
                        <Col sm={12} lg={3} className="Tab-content hide-on-mobile">
                            <h2 className="Tab-heading">Recovery Network</h2>
                            <div className="Tab-list">
                                <p>Web Design</p>
                                <p>Email Services</p>
                                <p>Work In Progress</p>
                                <p></p> 
                            </div>
                                <Button className="Portfolio-button"><a href="https://www.recoverynetwork.com/" target="_blank" rel="noreferrer noopener">
                                    Check it out here! <FontAwesomeIcon icon={faSquareArrowUpRight} /></a>
                                </Button>     
                        </Col>
                    
                </Row>
                <Row>
                    <Col sm={12} lg={6}>
                        <img className="d-block w-100 Tab-image" src={rn2 } alt="rn2"/>
                    </Col>
                    <Col sm={12} lg={6}>
                        <img className="d-block w-100 Tab-image" src={rn3 } alt="rn3"/>
                    </Col>
                </Row>

                <Row>
                    <Col sm={4} lg={4}>
                        <img className="d-block w-75 mx-auto Tab-image" src={rnm1 } alt="rnm1"/>
                    </Col>
                    <Col sm={4} lg={4}>
                        <img className="d-block w-75 mx-auto Tab-image" src={rnm2 } alt="rnm2"/>
                    </Col>
                    <Col sm={4} lg={4}>
                        <img className="d-block w-75 mx-auto Tab-image" src={rnm3 } alt="rnm3"/>
                    </Col>
                </Row>
            </Container>
                    
    );
}

function Website3() {
    return (
            <Container className="Tab-soulcentered Tab">
                <Row>
                        <Col sm={12} lg={3} className="Tab-content hide-on-desktop">
                            <h2 className="Tab-heading">Soul Centered</h2>
                            <div className="Tab-list">
                                <p>Wordpress and Woocommerce</p>
                                <p>SEO Optimization</p>
                                <p>Plugins</p>
                                <p>Web Design</p>
                            </div>
                                
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

function Website4() {
    return (
            <Container className="Tab-longcut Tab">
                <Row>
                    <Col sm={12} lg={3} className="Tab-content hide-on-desktop">
                            <h2 className="Tab-heading">Long Cut Landscaping</h2>
                            <div className="Tab-list">
                                <p>Web Design</p>
                                <p>Google Indexing</p>
                                <p>AWS Hosting</p>
                                <p>AWS Simple Email Service</p> 
                            </div> 
                               
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

function Aiartwork() {
    return (
            <Container className="Tab-AI-art Tab">
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

function Photography() {
    return (
            <Container className="Tab-AI-art Tab photography-portfolio">
                <Row className="justify-content-center">
                    <Col sm={10} lg={10}>
                        <Zoom>
                            <img className="d-block w-100 Tab-image" src={Newyorksunrise } alt="Brookyln Bridge sunrise"/>
                        </Zoom>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} lg={6}>
                        <Zoom>
                            <img className="d-block w-100 Tab-image" src={SunsetRocks } alt="Sunset at Quiet Waters park"/>
                        </Zoom>
                    </Col>
                    <Col sm={6} lg={6}>
                        <Zoom>
                            <img className="d-block w-100 Tab-image" src={SunsetBoat } alt="Sunset through boat"/>
                        </Zoom>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={10} lg={10}>
                        <Zoom>
                            <img className="d-block w-100 Tab-image" src={Pond } alt="Brookside Gardens Park"/>
                        </Zoom>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} lg={4}>
                        <Zoom>
                            <img className="d-block w-100 mx-auto Tab-image" src={CannonIdahoFalls } alt="Cannon in Idaho Falls"/>
                        </Zoom>
                    </Col>
                    <Col sm={4} lg={4}>
                        <Zoom>
                            <img className="d-block w-100 mx-auto Tab-image" src={Waterwheel } alt="Water Wheel Idaho Falls"/>
                        </Zoom>
                    </Col>
                    <Col sm={4} lg={4}>
                        <Zoom>
                           <img className="d-block w-100 mx-auto Tab-image" src={LandscapeGeorgetown } alt="Landscape in Georgetown"/> 
                        </Zoom>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} lg={6}>
                        <Zoom>
                            <img className="d-block w-100 mx-auto Tab-image" src={SunriseGolden } alt="Golden Colorado Sunrise"/>
                        </Zoom>
                    </Col>
                    <Col sm={6} lg={6}>
                        <Zoom>
                        <img className="d-block w-100 mx-auto Tab-image" src={FlowersIdahoFalls } alt="Flowers in Idaho Falls"/>
                        </Zoom>
                    </Col>
                </Row>

                <Row>
                    <Col sm={4} lg={4}>
                        <Zoom>
                            <img className="d-block w-100 mx-auto Tab-image" src={Flowers } alt="Brighton Dam Azalea Garden"/>
                        </Zoom>
                    </Col>
                    <Col sm={4} lg={4}>
                        <Zoom>
                        <img className="d-block w-100 mx-auto Tab-image" src={Mountainfield} alt="Blue Ridge Parkway"/>
                        </Zoom>
                    </Col>
                    <Col sm={4} lg={4}>
                        <Zoom>
                           <img className="d-block w-100 mx-auto Tab-image" src={Duck } alt="Duck!"/> 
                        </Zoom>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} lg={6}>
                        <Zoom>
                        <img className="d-block w-100 mx-auto Tab-image" src={OrangeDayLily } alt="Orange Day-Lily"/>
                            
                        </Zoom>
                    </Col>
                    <Col sm={6} lg={6}>
                        <Zoom>
                        <img className="d-block w-100 mx-auto Tab-image" src={Petunia } alt="Petunia"/>
                        </Zoom>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} lg={6}>
                        <Zoom>
                        <img className="d-block w-100 mx-auto Tab-image" src={Rock } alt="Brighton Dam Azalea Garden Reservoir"/>
                            
                        </Zoom>
                    </Col>
                    <Col sm={6} lg={6}>
                        <Zoom>
                        <img className="d-block w-100 mx-auto Tab-image" src={Sky } alt="It is blue with white clouds"/>
                        </Zoom>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={12} lg={8}>
                        <Zoom>
                            <img className="d-block w-100 Tab-image" src={Pier01} alt="Some Pier"/>
                        </Zoom>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} lg={6}>
                        <Zoom>
                            <img className="d-block w-100 mx-auto Tab-image" src={KentIslandCars } alt="Kent Island Cult Classic car show"/>
                        </Zoom>
                    </Col>
                    <Col sm={6} lg={6}>
                        <Zoom>
                            <img className="d-block w-100 mx-auto Tab-image" src={S2000 } alt="S2000 at Cult Classic car show"/>
                        </Zoom>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} lg={4}>
                        <Zoom>
                            <img className="d-block w-100 mx-auto Tab-image" src={Merc01 } alt="Mercades"/>
                        </Zoom>
                    </Col>
                    <Col sm={4} lg={4}>
                        <Zoom>
                            <img className="d-block w-100 mx-auto Tab-image" src={JBFerrari } alt="Ferrari"/>
                        </Zoom>
                    </Col>
                    <Col sm={4} lg={4}>
                        <Zoom>
                            <img className="d-block w-100 mx-auto Tab-image" src={NSX } alt="NSX"/>
                        </Zoom>
                    </Col>
                </Row>
                
                <Row>
                    <Col sm={6} lg={6}>
                        <Zoom>
                            <img className="d-block w-100 mx-auto Tab-image" src={Bronco } alt="Maryland Bay Bridge from Kent Island"/>
                        </Zoom>
                    </Col>
                    <Col sm={6} lg={6}>
                        <Zoom>
                            <img className="d-block w-100 mx-auto Tab-image" src={Field01 } alt="Red Chevy C10"/>
                        </Zoom>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} lg={6}>
                        <Zoom>
                            <img className="d-block w-100 mx-auto Tab-image" src={Car02} alt="Blue Ridge Parkway"/>
                        </Zoom>
                    </Col>
                    <Col sm={6} lg={6}>
                        <Zoom>
                            <img className="d-block w-100 mx-auto Tab-image" src={Baybridge } alt="NSX"/>
                        </Zoom>
                    </Col>
                </Row>
            </Container>
    )
}




export {Website1, Website2, Website3, Website4, Aiartwork, Photography};