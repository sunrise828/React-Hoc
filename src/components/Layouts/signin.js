import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Container, Row, Col
     } from 'reactstrap';
import Header from '../Header/index';
import Footer from '../Footer/index';
//import FacebookButton from '../Authentication/Facebook';
import PlaidLogin from '../Authentication/PlaidLogin';
import './signin.css';
import Logo from '../../assets/image/logo1.png';


// const federated = {
//     facebook_app_id: "your_facebook_id"
// }
const rowStyle = {
    margin: 'auto',
    marginTop: '38vh'
}

const divider = {
    height: 100,
    width: 5,
    backgroundColor: 'black',
    marginRight: 30
}

const logoStyle = {    
    width: 300,
    height: 100
}

const Signin  = (props) => { 
    this.signin = (response) => {
        console.log(response);
    } 
    
    this.facebookSignIn = (response) => {
        console.log(response);
    }
    return (
        <Container className="signin">
            <Header />
            <Row style={rowStyle}>
                <Col xs={3} md={3} />
                <Col xs={3} md={3}>
                    <PlaidLogin/>
                </Col>
                <Col xs={1} md={1}>
                    <div style={divider}/>                    
                </Col>
                <Col xs={5} md={5} style={{textAlign: 'left', marginLeft: '-3vw'}}>
                    <Link to="/dashboard">
                        <img src={Logo} style={logoStyle} alt="logo"/>
                    </Link>
                </Col>
            </Row>
            {props.children}
            <Footer />
        </Container>
    )
}

export default Signin;