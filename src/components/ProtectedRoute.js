import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {Redirect, Route} from 'react-router-dom';
import {LOGIN_PATH} from '../paths';

const loggedInPlayerQuery = gql`
  query LoggedInPlayerQuery {
    currentPlayer {
      id
    }
  }
`;

const ProtectedRoute = ({component: Component, ...rest}) => (
  <Query query={loggedInPlayerQuery}>
    {({data, error, loading}) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>There was an error :(</div>;

      return (
        <Route
          {...rest}
          render={props =>
            data.currentPlayer && data.currentPlayer.id ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: LOGIN_PATH,
                  state: {from: props.location},
                }}
              />
            )
          }
        />
      );
    }}
  </Query>
);

export default ProtectedRoute;
