import React from 'react';
//import createHistory from "history/createBrowserHistory"
//import { withFacebook } from 'aws-amplify-react';
import Router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ApolloProvider } from "react-apollo";
import ApolloClient from 'apollo-boost';
import { HttpLink, InMemoryCache } from 'apollo-boost';

import { BrowserRouter } from "react-router-dom";

const httpLink = new HttpLink({uri: 'http://localhost:5000'});
const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql",
  link: httpLink,
  cache: new InMemoryCache()
});

const App = () =>(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <div className="App">
          <Router/>    
      </div>
    </ApolloProvider>
  </BrowserRouter>
)

export default App;