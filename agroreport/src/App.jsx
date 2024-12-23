import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectMachine from './components/selectMachire/SelectMachine';
import SelectReport from './components/selectReport/SelectReport';

function App() {



  return (
   <div>
    <BrowserRouter basename='admin'>
      <Routes>
        <Route path="/" element={<SelectMachine />}/>
        <Route path="/rep/:id" element={<SelectReport />}/>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
