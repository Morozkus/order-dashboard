import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';

function App() {
 return (
  <>
   <NavBar />
   <Container>
    <AppRouter />
   </Container>
  </>
 );
}

export default App;
