import { useState } from "react";
import Alert from "./Alert";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [edadError, setEdadError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [cpassword, setCPass] = useState("");
  const [error, setError] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPass, setErrorPass] = useState(false)
  // const [selectedGender, setSelectedGender] = useState("");
  // const [errorGenero, setErrorGenero] = useState(false);




  const validarDatos = (e) => {
    e.preventDefault()

    setErrorEmail(!validarEmail(email));
    setEdadError(!validarEdad(edad));
    setErrorPass(!validarPass(password, cpassword));
    // setErrorGenero(selectedGender);


    if (nombre === '' || email === '' || password === '' || cpassword === '' || edad === '') {
      setError(true)
      return
    }
    setError(false);
    setNombre('');
    setEdad('');
    setEmail('');
    setPass('');
    setCPass('');
    setErrorEmail(false);
    // setErrorGenero(false);
    // setSelectedGender('');
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


  return (
    <>

      <form className="formulario" onSubmit={validarDatos}>
        {error ? <Alert message="Todos los campos son obligatorios" type="danger" show={error} /> : null}
        {errorEmail ? <Alert message="Debe ingresar un email válido" type="danger" show={!validarEmail(email)} /> : null}
        {edadError ? <Alert message="Debe ser mayor a 18 años" type="danger" show={!validarEdad(edad)} /> : null}
        {errorPass ? <Alert message="Ambas contraseñas deben coincidir " type="danger" show={!validarPass(password, cpassword)} /> : null}
        {/* {errorGenero ? <Alert message="Debe seleccionar un genero" type="danger" show={!validarGenero(selectedGender)} /> : null} */}


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
              id="genero"
              className="form-select"
              aria-label="Seleccione su género"
              // value={selectedGender}
              // onChange={(e) => {
              //   setSelectedGender(e.target.value);
              //   setError(false);
              // }}
            >
              <option disabled value="">Seleccione su género</option>
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
        <button type="submit" className="form-control btn btn-success mt-3">
          Enviar
        </button>
      </form>


    </>
  );
};

export default Formulario;
