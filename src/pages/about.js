import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Aboutme from './assets/images/Mantuik.JPG';
import {useState} from 'react';


function About() {

    const [showMore, setShowMore] = useState(false);

    const text = "I am currently employed full-time as an IT Support Engineer, concurrently engaging in website development during my free hours. When not at work, you'll likely find me at the gym or immersed in studying for my next certification. In the process of exploring potential career paths, I stumbled upon web development early in my coding journey. The satisfaction of witnessing visual transformations from inception to completion intrigued me. Although my current portfolio mainly comprises unfinished projects, I have developed a strong passion for working in IT. My goal is to complete these projects and embark on creating a plethora of new websites in the near future."


    return (
                <Container>
                    <Row>
                        <Col sm={12} lg={4}>
                        <img className="d-block w-100" src={Aboutme } alt="Aboutme"/>
                        </Col>
                        <Col sm={12} lg={8} className="text-center">
                            <h2 className="h2-gradient">About Me</h2>
                            <h4>25 Years | Maryland | Freelance Web Developer</h4>
                            <hr></hr>
                            <h5 className="hide-on-mobile">{text}</h5>
                            <div className="hide-on-desktop"> 
                                <h5>
                                    {showMore ? text : `${text.substring(0, 250)}`}
                                </h5>
                                <Button className="Contact-button" onClick={() => setShowMore(!showMore)}>
                                    {showMore ? "Show less" : "Show more"}
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
    );
}

export default About;