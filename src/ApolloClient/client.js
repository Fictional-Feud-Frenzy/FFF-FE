import {ApolloClient, InMemoryCache} from '@apollo/client';
const client = new ApolloClient
({
  uri: 'https://01bda5db-0263-4dc5-9ad3-0eb4fff5e35f.mock.pstmn.io/',
  cache: new InMemoryCache(),
});

export default client