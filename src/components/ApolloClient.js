import {ApolloClient as BaseClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink} from 'apollo-link';
import {HttpLink} from 'apollo-link-http';

const link = new HttpLink({
  credentials: 'include',
  uri: 'http://localhost:4000/graphql',
});

const ApolloClient = new BaseClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([link]),
});

export default ApolloClient;
