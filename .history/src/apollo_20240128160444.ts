import { ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://',
  cache: new InMemoryCache(),
});