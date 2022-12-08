import React, {useState} from 'react';
import Main from './Components/Main'
import Home from './Home/home'
import Map from './Components/Maps/Map';
import { ChakraProvider, theme } from '@chakra-ui/react'

const App=()=>{
  const [route, setRoute]=useState('home')
  const router={
    home:<Home setRoute={setRoute}/>,
    main:<Main setRoute={setRoute}/>,
    map:<Map/>,
  }

  return (
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {router[route]}
    </ChakraProvider>
  </React.StrictMode>
);
}

export default App