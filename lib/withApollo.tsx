import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

let client: ApolloClient<any> | null = null;

const httpLink = createHttpLink({
    uri: 'http://localhost:1337/graphql',
  });

const token = "85a94b2c8d877dbc746d0a15912102876bcdfdd80a566f3052c74d5b5c639afb5f4d1c2c273d0276f83ae776dca2598d3fc7b2b9b2be663a05c50fc5ce3e35c714957ef0600226b012cd38d4cb5dba53d28e043882a48f555c60894e781e785e21923e1bcdd8eaf0dd58865e6ccf3a902b0dc5ecd51932ddbff39cbef8f81bb1"

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`
      }
    }
  });

export const getClient = () => {
  // create a new client if there's no existing one
  // or if we are running on the server.
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  }

  return client;
};