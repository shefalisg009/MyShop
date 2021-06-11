import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './Component/header';
import Footer from './Component/footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <Router>
    <Header />
    <main>
      <Container>
      <Route path = "/" component={HomeScreen} exact></Route>
      <Route path = "/product/:id" component={ProductScreen}></Route>
     </Container>
   </main>
    <center>
    <Footer />
    </center>
     
    </Router>
  );
}

export default App;
