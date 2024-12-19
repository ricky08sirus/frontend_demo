import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ExchangeProvider } from './context/exchangeContext.tsx';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      // staleTime: 60 * 1000
    },
  },
});
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>
)
