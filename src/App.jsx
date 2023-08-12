import React, { useState } from 'react'
import Registro from './components/Registro';
import SocialButton from './components/SocialButton';
// import { brotliDecompress } from 'zlib';
import Alert from './components/Alert';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [alertMessage, setAlertMessage] = useState('');
  // const [alertType, setAlertType] = useState('');

  // const handleRegistration = (message, type) => {
  //   setAlertMessage(message);
  //   setAlertType(type);
  // };

  return (
    <div>
      <SocialButton/>
      <Registro/>
      {/* <Alert message={alertMessage} type={alertType} /> */}
    </div>
  );
}



export default App;