import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, Container } from 'react-bootstrap';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Contact() {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.GATSBY_YOUR_SERVICE_ID, process.env.GATSBY_YOUR_TEMPLATE_ID, form.current, process.env.GATSBY_YOUR_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          toast.success("Message Sent!")
      };
    

    return (
            
            <Container>
            <Col sm={12} lg={12} className="text-center">
                    <h2 className="h2-gradient">Contact</h2>
                    </Col>
                <Row>
                    <Col sm={12} lg={6}>
                        <h5>Looking for a custom website or help with your current website? Let me know how I can help you today!</h5>
                        <h4>Like what you see? Let's talk:</h4>
                        <h5><a className="email-link" target="_blank" rel="noopener noreferrer" href="mailto: kylekatzenmaier@gmail.com">kylekatzenmaier@gmail.com</a></h5>
                    </Col>
                    <Col>
                        <div className='Contact-form'>
                            <form ref={form} onSubmit={sendEmail}  > 
                                <Row>
                                    <Col sm={12} lg={6}>
                                        <input
                                            name="name"
                                            type="text" 
                                            placeholder="Name" />
                                    </Col>

                                    <Col sm={12} lg={6}>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Email" />
                                    </Col>

                                </Row>
                                    <Col sm={12} lg={12}>
                                            <textarea
                                                name="message"
                                                placeholder="Message"
                                                rows={3}
                                                />
                                    </Col>
                                  
                                    <Button type="Submit" value="send" className="Contact-button">
                                        Send 
                                    </Button>
                            </form>
                            <ToastContainer/>
                        </div>
                    </Col>
                </Row>
            </Container>
           
    );
}

export default Contact;

