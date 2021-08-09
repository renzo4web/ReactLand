import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './auth/AuthContext';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box overflowX="hidden">
        <AuthContext>
          <AppRouter />
        </AuthContext>
      </Box>
    </ChakraProvider>
  );
}

export default App;
