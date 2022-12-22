import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css'
import React from "react";


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
        <h1>
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
                <Container fluid>
                    <div className="backlight-section">
                        <Container >
                            <Row className="justify-content-center" style={{flex:1}}>
                                <Col className="text-center">
                                    <div className="home-space">
                                        <h1 className="home-name-intro">Introducing</h1>
                                        <div className="home-name">
                                            <TypingEffect dataText={['Kyle']} delay={800} />
                                        </div>
                                        <div className="home-name">
                                            <TypingEffect dataText={['Katzenmaier']} delay={1600} /> 
                                        </div>
                        
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