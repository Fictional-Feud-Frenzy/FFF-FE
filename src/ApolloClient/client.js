import {ApolloClient, InMemoryCache} from '@apollo/client';

const uri = process.env.NODE_ENV === 'production'
  ? 'https://fff-be-2e7913919a6b.herokuapp.com/graphql'
  : 'http://127.0.0.1:6969/graphql';

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

export default client