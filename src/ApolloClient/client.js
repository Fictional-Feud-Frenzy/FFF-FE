import {ApolloClient, InMemoryCache} from '@apollo/client';
const client = new ApolloClient
({
  uri: 'https://fff-be-2e7913919a6b.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export default client