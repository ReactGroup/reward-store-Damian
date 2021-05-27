import React, {useState, useEffect} from "react"; 
// import {Link} from "react-router-dom"; 
import Swal from 'sweetalert2';
import './styles.css'
function Register(){
    
  const registro =() =>{
    Swal.fire({
      title: "Desea confirmar el registro",
     
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Registro exitoso", 
      icon: "question",
     cancelButtonText: "Cancelar",
     confirmButtonText: "Aceptar"  
     
    })
    .then(() => {
      if (validateUsername === true && validatePassword === true) {
         Swal.fire({
          title: "Registro Exitoso!",
          icon: "success",
           confirmButtonText: "Aceptar"   
        });
      }
       else {
        Swal.fire({
          title: "Registro Cancelado",
          icon: "error",
          confirmButtonText: "Aceptar"
        });
      }
    });
    }

    const [userName, setUserName] = useState("");
    const [validateUsername, setValidateUsername] = useState(true);
    const [userPassword, setUserPassword] = useState("");
    const [validatePassword, setValidatePassword] = useState(true);
    const [email, setEmail] = useState("");
    const [validateEmail, setValidateEmail] = useState(true); 
    const [boton, habilitarBoton] = useState(true);
  

    const onChangePassword = (e)=>{
    setUserPassword(e.target.value)
   }
   const onChangeEmail = (e)=>{
       setEmail(e.target.value)
   }
   const onChangeUser = (e)=>{
       setUserName(e.target.value)
   }

   useEffect(() => {
      if (userName.length !== 0) {
        setValidateUsername(userName.length > 3 && userName !== "username");
      }
    }, [userName]);

    useEffect(() => {
        if (email.length !== 0) {
          setValidateEmail(
             email.includes(".") &&
              email.includes("@")
          );
        }
      }, [email]);

    useEffect(() => {
      if (userPassword.length !== 0) {
        setValidatePassword(
          userPassword.length > 3 &&
            userPassword !== "password" &&
            userPassword.includes(".")
        );
      }
    }, [userPassword]);
  
    useEffect(() => {
      if (validateUsername === true && validatePassword === true) {
        habilitarBoton(false);
       
      } else {
        habilitarBoton(true);
      }
    }, [validateUsername, validatePassword]);

    return(
        <div className="flex-container-register centered">
        <div className="card-register ">
          <div className="regla title-register"><strong>REGISTRO</strong></div>
          <div className="inputContainer">
            <input
              className={validateUsername ? "" : "inputError"}
              value={userName}
              onChange = {onChangeUser}
              autoComplete="off"
              placeholder="Ingrese su nombre de Usuario"
              name="username"
              type="text"
            />
            <span id="comment-register" className={validateUsername ? " error" : " visible error"}>
              Username debe contener mas de 3 letras
            </span>
          </div>
        
          <div className="inputContainer">
            <input
              className={validateEmail ? "" : "inputError"}
              value={email}
              onChange = {onChangeEmail}
              autoComplete="off"
              placeholder="Ingrese su email"
              name="email"
              type="email"
            />
            <span id="comment-register" className={validateEmail ? " error" : " visible error"}>
              Email debe contener un @ y al menos un punto
            </span>
          </div>

          <div className="inputContainer">
            <input
              className={validatePassword ? "" : "inputError"}
              value={userPassword}
              onChange = {onChangePassword}
              placeholder="Ingrese su Password"
              name="password"
              type="password"
            />
              <span id="comment-register" className={validatePassword ? " error" : " visible error"}>
              Password debe contener mas de 6 letras y un punto
            </span>
          </div>

      
              <button 
               disabled={boton} 
              onClick={registro} className="btn">
            REGISTRARSE
          </button>
           
        </div>
      </div>

      
    )

    
}
export default Register; 