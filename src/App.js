import React, { fragment } from "react";
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const fecha = new Date ().getFullYear();

  return (
    <fragment>
      <Header 
        titulo='Tienda Virtual'
      />

      <Footer fecha={fecha}></Footer>
    </fragment>
  )
}

export default App;
