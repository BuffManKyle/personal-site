import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Aboutme from './assets/images/temp-self.jpg';
import {useState} from 'react';


function About() {

    const [showMore, setShowMore] = useState(false);

    const text = "I graduated from Towson University in the summer of 2021 with a Bachelor's Degree in Communication Studies. Through my interest in video games, I discovered 3D graphic designs. Using Blender, I created various animations, landscapes, and simple assets. I later discovered Python, which I used for a short time to program a Discord bot with basic functions. Looking for other projects to work on, I looked into web development. With hopes of doing full stack, I am currently doing front-end web development while practicing more with back-end development. I have been able to develop websites and push them into production, all by teaching myself."


    return (
                <Container>
                    <Row>
                        <Col sm={12} lg={4}>
                        <img className="d-block w-100" src={Aboutme } alt="Aboutme"/>
                        </Col>
                        <Col sm={12} lg={8} className="text-center">
                            <h2 className="h2-gradient">About Me</h2>
                            <h4>24 Years | Maryland | Freelance Web Developer</h4>
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