import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter, Route} from 'react-router-dom';
import ApolloClient from './components/ApolloClient';
import AppLayout from './components/AppLayout';
import Login from './pages/Login';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import {HOME_PATH, LOGIN_PATH} from './paths';

export default () => (
  <ApolloProvider client={ApolloClient}>
    <BrowserRouter>
      <AppLayout>
        <BrowserRouter>
          <React.Fragment>
            <Route path={LOGIN_PATH} component={Login} />
            <ProtectedRoute path={HOME_PATH} exact component={Home} />
          </React.Fragment>
        </BrowserRouter>
      </AppLayout>
    </BrowserRouter>
  </ApolloProvider>
);
