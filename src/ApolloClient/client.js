import {ApolloClient, InMemoryCache} from '@apollo/client';
const client = new ApolloClient
({
  uri: 'https://fff-be-2e7913919a6b.herokuapp.com/graphql',
  // uri: 'http://127.0.0.1:6969/graphql',
  cache: new InMemoryCache(),
});

export default client