import React from 'react';
import { 
    Container
     } from 'reactstrap';
import Header from '../Header/index';
import Footer from '../Footer/index';
import './homepage.css';

const Homepage  = (props) => {
    return (
        <Container className="homepage transition-item">
            <Header isSignedin={true}/>            
            {props.children}
            <Footer />
        </Container>
    )
}

export default Homepage;