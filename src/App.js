import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
