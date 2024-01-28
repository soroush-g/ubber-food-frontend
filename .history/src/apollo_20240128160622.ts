import { ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://localhost:3000/graph',
  cache: new InMemoryCache(),
});