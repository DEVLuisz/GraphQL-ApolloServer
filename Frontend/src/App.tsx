import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ApolloCliente from './Apollo/ApolloClient';
import './App.css';
import Rotas from './Routes';

const queryClient = new QueryClient()

function App() {
  return (
    <ApolloCliente>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Rotas />
        </BrowserRouter>
      </QueryClientProvider>
    </ApolloCliente>
  );
}

export default App;
