import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import AppContainer from './components/NavBar/AppContainer/AppContainer';




function App() {
  return (
   <div>
     <AppContainer/>
   </div>
  );
}

export default App;
