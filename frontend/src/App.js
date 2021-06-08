import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Component/header';
import Footer from './Component/footer';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>
    <Header />
    <main>
      <Container>
          <HomeScreen/>
        </Container>
   </main>
    <center>
    <Footer />
    </center>
     
    </>
  );
}

export default App;
