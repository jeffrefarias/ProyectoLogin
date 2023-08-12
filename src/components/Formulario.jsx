import { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [cpassword, setCPass] = useState("");
  const [error, setError] = useState(false)

  const validarDatos = (e) => {
    e.preventDefault()

    if (nombre === '' || email === '' || password === '' || cpassword === '') {
      setError(true)
      return
    }
    setError(false)
    setNombre('')
    setEmail('')
    setPass('')
    setCPass('')
  }

  const validarEmail = (email) => {
    // Expresión regular para verificar el formato del correo electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const algunCampoLleno = nombre !== "" || (email !== "" && validarEmail(email))  || password !== "" || cpassword !== "";

  return (
    <>
    
      <form className="formulario" onSubmit={validarDatos}>
        {error ? <p>Todos los campos son obligatorios</p> : null}
        {error && !validarEmail(email) ? <p>Debe ingresar un email válido</p> : null}
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
        <div className="row form-group d-flex mt-3">
          <div className="col">
            <input
              type="text"
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
              type="text"
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
      {/* <h1>Datos ingresados</h1>   
      {nombre} - {apellido} - {edad} - {email} */}

      {error || !algunCampoLleno ? null : (
        <>
          <h1>Datos ingresados</h1>
          {nombre} - {email} - {password} - {cpassword}
        </>
      )}

    </>
  );
};

export default Formulario;
