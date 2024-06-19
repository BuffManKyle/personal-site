import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from 'react-bootstrap';
import React from "react";
import Footer from '../pages/partials/footer';

function Blog() {
    return (
        <div className='Body-css'>
            <Container>
            <Navbar.Brand className="Brand-name-offcanvas" href="/">Kyle Katzenmaier</Navbar.Brand>
                <div className="blog-header">
                    <h4>You arent supposed to be here, how can I help you?</h4>
                </div>
                <div className="blog-body">

                </div>
                
            </Container>
            <Footer />
        </div>
    );
}

export default Blog;