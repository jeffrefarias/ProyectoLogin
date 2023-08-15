import { useState } from "react";
import Alert from "./Alert";


const InicioSesion = () => {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
  
    const iniciarSesion = (e) => {
      e.preventDefault();
      // Aquí puedes agregar la lógica para iniciar sesión, por ejemplo, hacer una solicitud HTTP, etc.
      console.log("Iniciando sesión con:", email, password);
    };
  
    return (
      <form className="inicioSesionForm" onSubmit={iniciarSesion}>
        <h1>Inicio Sesion</h1>
  
        <div className="row form-group d-flex mt-3">
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
  
        <button type="submit" className="form-control btn btn-primary mt-3">
          Iniciar Sesión
        </button>
      </form>
    );
  };
  


export default InicioSesion;