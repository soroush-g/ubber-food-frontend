import { ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: 'آدرس-سرور-GraphQL',
  cache: new InMemoryCache(),
});