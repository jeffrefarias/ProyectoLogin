import { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false)

  const validarDatos = (e) => {
    e.preventDefault()

    if (nombre === '' || apellido === '' || edad === '' || email === '') {
      setError(true)
      return
    }
    setError(false)
    setNombre('')
    setApellido('')
    setEdad('')
    setEmail('')
  }

  const validarEmail = (email) => {
    // Expresión regular para verificar el formato del correo electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const algunCampoLleno = nombre !== "" || apellido !== "" || edad !== "" || (email !== "" && validarEmail(email));

  return (
    <>
      <form className="formulario" style={{ border: "1px solid red" }} onSubmit={validarDatos}>
        {error ? <p>Todos los campos son obligatorios</p> : null}
        <div className="row form-group d-flex mt-3">
          <div className="col-3">
            <label>Nombre</label>
          </div>
          <div className="col-9">
            <input
              type="text"
              name="nombre"
              className="form-control"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
          </div>
        </div>
        <div className=" row form-group d-flex mt-3">
          <div className="col-3">
            <label>Apellido</label>

          </div>
          <div className="col-9">
            <input
              type="text"
              name="apellido"
              className="form-control"
              onChange={(e) => setApellido(e.target.value)}
              value={apellido}
            />
          </div>
        </div>
        <div className="row form-group d-flex mt-3">
          <div className="col-3">
            <label>Edad</label>
          </div>
          <div className="col-9">
            <input
              type="text"
              name="edad"
              className="form-control"
              onChange={(e) => setEdad(e.target.value)}
              value={edad}
            />
          </div>
        </div>
        <div className=" row form-group d-flex mt-3">
          <div className="col-3">
            <label >Email</label>
          </div>
          <div className="col-9">
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Enviar
        </button>
      </form>
      {/* <h1>Datos ingresados</h1>   
      {nombre} - {apellido} - {edad} - {email} */}

      {error || !algunCampoLleno ? null : (
        <>
          <h1>Datos ingresados</h1>
          {nombre} - {apellido} - {edad} - {email}
        </>
      )}

    </>
  );
};

export default Formulario;
