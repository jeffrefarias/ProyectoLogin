import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './components/Registro'
import './App.css'
import SocialButton from './components/SocialButton';

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

export default App
