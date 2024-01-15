import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Signup from './components/signup/Signup';
import Signin from './components/sigin/Signin';
import {Routes, Route} from 'react-router-dom';import './App.css';

function App() {
  return (
    
      <div className="App">
        <Navbar/>
        <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/signin' element={ <Signin/>}/>
        <Route path='/signup' element={ <Signup/>}/>

        
         
        </Routes>
        
      </div>
  
  );
}

export default App;
