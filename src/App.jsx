import React from 'react';
import Registro from './components/Registro';
// import InicioSesion from './components/InicioSesion';
// import Alert from './components/Alert';
// import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

 

function App() {
  return (
    <div>
      {/* <Routes> */}
        {/* <Route path='/' element={<Registro />} /> */}
        {/* <Route path='/InicioSesion' element={<InicioSesion />} /> */}
      {/* </Routes> */}

      <Registro />
    </div>
  );
}

export default App;
