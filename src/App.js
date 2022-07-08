import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Functioncomp from './components/Functioncomp';
import{ ClassComp, ClassComp1 }from './components/ClassComp';
import Click from './components/Click'
import  Counter from './components/Counter';
function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <h2>How far</h2>
      <Functioncomp />
      <ClassComp />
      <ClassComp1 />
      <Click />
      <Counter />
    </div>
    
  );
}

export default App;
