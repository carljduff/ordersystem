import './App.css';
import Menu from './components/Menu';
import React, { useState, useEffect } from 'react';

function App() {
  
  let apps = ["Mozz Sticks, ", "Sliders, ", "Nachos "]


  console.log(apps)



  return (
    <div className="App">
  
    <Menu apps={apps}/>
    </div>
  );
}

export default App;
