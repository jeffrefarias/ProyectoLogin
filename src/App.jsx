import React from 'react';
import Registro from './components/Registro';
import SocialButton from './components/SocialButton';
import Alert from './components/Alert';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <SocialButton />
      <Registro />
    </div>
  );
}

export default App;
