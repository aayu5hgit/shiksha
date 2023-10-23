import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode,  Suspense  }  from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import "./i18n.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider>
    <Suspense fallback="loading">
      <App />
    </Suspense>
    
    </ChakraProvider>
  </StrictMode>
);