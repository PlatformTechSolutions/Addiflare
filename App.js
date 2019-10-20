import React from 'react';
import AppNavigator from './src/navigation/MainNavigation';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';




export default function App() {

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/'
});

  return (
    <ApolloProvider client={client}>
      <AppNavigator />
    </ApolloProvider>
      
  );
}
