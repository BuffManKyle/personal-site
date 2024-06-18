import "bootstrap/dist/css/bootstrap.min.css";
import { Container} from 'react-bootstrap';
import './styles.css'
import React from "react";
import Footer from '../pages/partials/footer';

function Blog() {
    return (
        <div className='Body-css'>
            <Container>
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