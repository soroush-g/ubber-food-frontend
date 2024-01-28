import { ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://localhost',
  cache: new InMemoryCache(),
});