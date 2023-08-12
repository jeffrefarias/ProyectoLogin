import React, { useState } from 'react'
import Registro from './components/Registro';
import SocialButton from './components/SocialButton';
// import { brotliDecompress } from 'zlib';
import Alert from './components/Alert';


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <div>
        <SocialButton />
        <Registro />
      </div>
    </>
  )
}



export default App;