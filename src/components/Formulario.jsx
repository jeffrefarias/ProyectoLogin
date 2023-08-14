import { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import SocialButton from './SocialButton';
import Alert from "./Alert";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [edadError, setEdadError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [cpassword, setCPass] = useState("");
  const [genero, setGenero] = useState("Seleccione su género");
  const [error, setError] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorGenero, setErrorGenero] = useState(false);


  const validarDatos = (e) => {
    e.preventDefault()

    setErrorEmail(!validarEmail(email));
    setErrorGenero(genero === "Seleccione su género");


    if (nombre === '' || email === '' || password === '' || cpassword === '' || genero === 'Seleccione su género') {
      setError(true)
      return
    }
    setError(false)
    setNombre('')
    setEmail('')
    setPass('')
    setCPass('')
    setErrorEmail()
    setErrorGenero(false);
    setEdad('');
    setGenero("Seleccione su género");
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

  // const validarGenero = (genero) => {
  //   return genero !== "";
  // };

  const algunCampoLleno = nombre !== "" || (email !== "" && validarEmail(email)) || password !== "";

  return (
    <>
      {/* _Inicio_ */}
      <h1>Crea una cuenta</h1>
      <SocialButton />
      <p>O usa tu email para registrarte</p>

      {/* _Validacion_ */}
      <form className="formulario" onSubmit={validarDatos}>
        {error ? <Alert message="Todos los campos son obligatorios" type="danger" show={error} /> : null}
        {errorEmail ? <Alert message="Debe ingresar un email válido" type="danger" show={error && !validarEmail(email)} /> : null}
        {errorGenero ? (<Alert message="Debe seleccionar un género" type="danger" show={error && genero === "Seleccione su género"} />) : null}

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

        {/* _Botones_  */}
        <button type="submit" className="form-control btn btn-success mt-3">
          Enviar
        </button>
        <p>¿Ya tienes una cuenta? Ingresa para continuar</p>
        <button type="button" className="form-control btn btn-success mt-3">
          Iniciar sesión
        </button>

      </form >


    </>
  );
};

export default Formulario;
