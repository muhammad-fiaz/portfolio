import React from 'react';
import './App.css';
import Notice from "./components/dev/status";
import Navbar from "./components/home/Navbar";
function App() {
  return (
      <div>
       <Navbar/>

      <Notice/>
  </div>
  );
}

export default App;
