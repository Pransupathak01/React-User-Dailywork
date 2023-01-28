import React from 'react';
//import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import UserName from './components/userName';
import "bootstrap/dist/css/bootstrap.css"

function App(){
 
  return(
    <div >
      <Header />
      <UserName />
      <Footer />
     
    </div>
  );
  
}
 
export default App;
