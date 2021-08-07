import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box overflowX="hidden">
        <AppRouter />
      </Box>
    </ChakraProvider>
  );
}

export default App;
