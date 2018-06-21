import React from 'react';
import { withFederated } from 'aws-amplify-react';
import { Button } from 'reactstrap';
import facebookLogo from '../../assets/image/facebook1.png';
const style = {
    borderRadius: 5,
    backgroundColor: '#3a559f',
    borderColor: '#3a559f',
    marginTop: 30
}

const logoStyle = {
    height: 25,
    marginRight: 5,
    marginTop: -5
}
const FacebookButton = (props) => (
    <Button color="primary" onClick={props.facebookSignIn} style={style}>
        <img src={facebookLogo} style={logoStyle} alt="facebook login"/>
        <span>Login with Facebook</span>
    </Button>
)

export default withFederated(FacebookButton);
