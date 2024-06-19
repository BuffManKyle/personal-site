import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css'
import React from "react";
import Portfolio from '../pages/portfolio';
import About from '../pages/about';
import Skills from '../pages/skills';
import Contact from '../pages/contact';
import Header from '../pages/partials/header';
import Footer from '../pages/partials/footer';
import {Nav} from 'react-bootstrap';
import Slide from 'react-reveal/Slide';

class TypingEffect extends React.Component {
    state = {
      text: '',
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 150,
      cursor: '_'
    }
  
    componentDidMount() {
      setTimeout(this.handleType, this.props.delay);
    }
  
    handleType = () => {
      const { dataText } = this.props;
      const { isDeleting, loopNum, text, typingSpeed } = this.state;
      const i = loopNum % dataText.length;
      const fullText = dataText[i];
  
      this.setState({
        text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
        typingSpeed: isDeleting ? 30 : 150
      });
  
      if (!isDeleting && text === fullText) {
        setTimeout(() => this.setState({ isDeleting: true }), 500);
      } else if (isDeleting && text === '') {
        this.setState({
          isDeleting: false,
          loopNum: loopNum + 1
        });
      }
  
      if (text !== fullText) {
        setTimeout(this.handleType, typingSpeed);
      }
    };
  
    render() {
      return (
        <h1 className="home-name">
          {this.state.text}
          {this.state.text !== this.props.dataText[this.props.dataText.length - 1] &&
            <span className="cursor">{this.state.cursor}</span>
          }
        </h1>
      );
    }
  }
function Home() {
    return (
                <div className='Body-css'>
                  <Header />
                <Container fluid>
                    <div className="backlight-section">
                        <Container >
                            <Row className="justify-content-center" style={{flex:1}}>
                                <Col className="text-center">
                                    <div className="home-space">
                                        <h1 className="home-name-intro">Introducing</h1>
                                        <div>
                                            <TypingEffect dataText={['Kyle']} delay={800} />
                                        </div>
                                        <div>
                                            <TypingEffect dataText={['Katzenmaier']} delay={1600} /> 
                                        </div>
                        
                                        <h2 className="home-name">Web Developer</h2>
                                    </div>
                                    
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className='Body-css'>
                      <Slide left>
                        <div className='sections' id="portfolio"><Portfolio /></div>
                      </Slide>

                      <Slide right>
                        <div className='sections' id="about"><About /></div>
                      </Slide>

                      <Slide left>
                        <div className='sections' id="skills"><Skills /></div>
                      </Slide>

                      <Slide right>
                        <div className='sections' id="contact"><Contact /></div>
                      </Slide>
                      <Nav.Link href="/blog" >Test Link</Nav.Link>
                        <Footer />
                    </div>
                </Container>
              
                </div>
    );
}

export default Home;