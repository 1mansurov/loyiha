import React from 'react';
import { useLocation } from 'react-router-dom'; 
import RouteController from './routes';
import Nav from './components/navbar/Nav';

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/login' && <Nav /> } 
      <RouteController />
    </>
  );
}

export default App;
