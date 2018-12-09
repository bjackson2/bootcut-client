import React from 'react';
import {ApolloProvider, Query} from 'react-apollo';
import gql from 'graphql-tag';
import ApolloClient from './components/ApolloClient';

export default () => (
  <ApolloProvider client={ApolloClient}>
    <Query
      query={gql`
        query BoardRowQuery {
          boardRows {
            id
            activityDescription
            breakawaysToAdd
            currentPlayers {
              id
              player {
                id
                name
                email
                isOnline
                playerIcon
              }
              numberOfBreakaways
            }
          }
        }
      `}
    >
      {({loading, error, data}) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.boardRows.map((row, index) => (
          <div key={index}>
            <p>{JSON.stringify(row)}</p>
          </div>
        ));
      }}
    </Query>
  </ApolloProvider>
);
