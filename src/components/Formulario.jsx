import { useState } from "react";
import SocialButton from './SocialButton';
import Alert from "./Alert";
import { useNavigate } from 'react-router-dom';

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [edadError, setEdadError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [cpassword, setCPass] = useState("");
  const [genero, setGenero] = useState("Seleccione su género");
  const [error, setError] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPass, setErrorPass] = useState(false)
  const [errorGenero, setErrorGenero] = useState(false);
  const navigate = useNavigate();



const [successMessage, setSuccessMessage] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault()

    setErrorEmail(!validarEmail(email));
    setEdadError(!validarEdad(edad));
    setErrorPass(!validarPass(password, cpassword));
    setErrorGenero(genero === 'Seleccione su género');


    if (nombre === '' || email === '' || password === '' || cpassword === '' || edad === '' || genero === 'Seleccione su género') {
      setError(true)
      return
    }

    if (!error && !errorEmail  && !edadError && !errorPass && !errorGenero) {

      setError(false);
      setNombre('');
      setEdad('');
      setEmail('');
      setPass('');
      setCPass('');
      setErrorEmail(false);
      setErrorGenero(false);
      setEdad('');
      setGenero("Seleccione su género");
      setSuccessMessage(true);

      navigate('/InicioSesion'); 
    }

    
  }


  // Expresión regular para email 
  const validarEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  //  Expresion regular para validar +18
  const validarEdad = (edad) => {
    const agePattern = /^(1[89]|[2-9]\d|\d{3,})$/;
    return agePattern.test(edad);
  };

  const validarPass = (password, cpassword) => {
    return password === cpassword
  };



  return (
    <>
{/* _Inicio_ */}
      <h1>Crea una cuenta</h1>
      <SocialButton />
      <p>O usa tu email para registrarte</p>

      <form className="formulario" onSubmit={validarDatos}>
        {error ? <Alert message="Todos los campos son obligatorios" type="danger" show={error} /> : null}
        {errorEmail ? <Alert message="Debe ingresar un email válido" type="danger" show={!validarEmail(email)} /> : null}
        {edadError ? <Alert message="Debe ser mayor a 18 años" type="danger" show={!validarEdad(edad)} /> : null}
        {errorPass ? <Alert message="Ambas contraseñas deben coincidir " type="danger" show={!validarPass(password, cpassword)} /> : null}
        {errorGenero ? (<Alert message="Debe seleccionar un género" type="danger" show={error && genero === "Seleccione su género"} />) : null}
        

{/* _Mensaje registro éxitoso */}
        {successMessage && (
          <div className="alert alert-success mt-3">
            El registro ha sido exitoso
          </div>)}


        <div className="row form-group d-flex mt-3">
          <div className="col">
            <input
              type="text"
              name="nombre"
              className="form-control"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              autoComplete="off"
              placeholder="Nombre"
            />
          </div>
        </div>
        <div className="row form-group d-flex mt-3">
          <div className="col">
            <input
              type="text"
              name="edad"
              className="form-control"
              onChange={(e) => setEdad(e.target.value)}
              value={edad}
              autoComplete="off"
              placeholder="Edad"
            />
          </div>
        </div>
        <div className=" row form-group d-flex mt-3">
          <div className="col">
            <input
              type="text"
              name="Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autoComplete="off"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="row form-group d-flex mt-3 ">
          <div>
            <select
              className={`form-select ${errorGenero ? "is-invalid" : ""}`}
              aria-label="Seleccione su género" value={genero} onChange={(e) => setGenero(e.target.value)} >
              <option selected name="select">Seleccione su género</option>
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
              <option value="transexual">Transexual</option>
              <option value="helicoptero">Helicóptero Apache</option>
            </select>
          </div>
        </div>
        <div className="row form-group d-flex mt-3">
          <div className="col">
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={(e) => setPass(e.target.value)}
              value={password}
              autoComplete="off"
              placeholder="Contraseña"
            />
          </div>
        </div>
        <div className=" row form-group d-flex mt-3">
          <div className="col">
            <input
              type="password"
              name="cpassword"
              className="form-control"
              onChange={(e) => setCPass(e.target.value)}
              value={cpassword}
              autoComplete="off"
              placeholder="Confirmar Contraseña"
            />
          </div>

        </div>
        <button type="submit" className="form-control btn btn-success mt-3">Enviar</button>
        <p>¿Ya tienes una cuenta? <a href="">Registrar</a></p>
       
      </form >



    </>
  );
};

export default Formulario;
