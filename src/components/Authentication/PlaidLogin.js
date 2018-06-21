import React from 'react';
import PlaidLink from 'react-plaid-link';

const style = {
    borderRadius: 5,
    backgroundColor: '#3a559f',
    borderColor: '#3a559f',
    marginTop: 30,
    padding: '10px 20px',
    color: 'white'
}

const handleOnExit = (response) => {
    console.log(response);
}

const handleOnSuccess = (response) => {
    console.log(response);
}

const PlaidLogin = (props) => (
    <PlaidLink
        clientName="Plaid sandbox"
        env="sandbox"
        product={["auth", "transactions"]}
        publicKey="96b0c5c735722a87203d972d4115c3"
        onExit={handleOnExit}
        onSuccess={handleOnSuccess} style={style}>
        <span>Login with Account</span>
    </PlaidLink>
    
)

export default PlaidLogin;
