import { InMemoryCache, ApolloProvider, ApolloClient } from '@apollo/client';
import React, { ReactElement } from 'react'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:9000/graphql',
})

type Props = {
  children: ReactElement
}

const ApolloCliente = ({ children } : Props) => {

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )

}

export default ApolloCliente;
