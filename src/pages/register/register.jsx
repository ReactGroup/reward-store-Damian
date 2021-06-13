import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
function Register() {
  const [userName, setUserName] = useState("");
  const [validateUsername, setValidateUsername] = useState(false);
  const [userPassword, setUserPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [validateEmail, setValidateEmail] = useState(false);
  const [boton, habilitarBoton] = useState(false);
  const notify = () =>
    toast.success("Succesful Register!!!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const onChangePassword = (e) => {
    setUserPassword(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeUser = (e) => {
    setUserName(e.target.value);
  };

  useEffect(() => {
    if (userName.length !== 0) {
      setValidateUsername(userName.length > 5);
    }
  }, [userName]);

  useEffect(() => {
    if (email.length !== 0) {
      setValidateEmail(email.includes(".") && email.includes("@"));
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
    if (!!validatePassword && !!validateUsername && !!validateEmail) {
      habilitarBoton(false);
      notify();
    } else {
      habilitarBoton(true);
    }
  }, [validatePassword, validateUsername, validateEmail]);

  return (
    <div className="flex-container-register centered">
      <div className="card-register ">
        <div className="regla title-register">
          <strong>REGISTER FORM</strong>
        </div>
        <div className="inputContainer">
          <input
            className={validateUsername ? "" : "inputError-register"}
            value={userName}
            onChange={onChangeUser}
            autoComplete="off"
            placeholder="Ingrese su nombre de Usuario"
            name="username"
            type="text"
          />
          <span
            id="comment-register"
            className={validateUsername ? " error" : " visible error"}
          >
            Username debe contener mas de 5 letras
          </span>
        </div>

        <div className="inputContainer">
          <input
            className={validateEmail ? "" : "inputError-register"}
            value={email}
            onChange={onChangeEmail}
            autoComplete="off"
            placeholder="Ingrese su email"
            name="email"
            type="email"
          />
          <span
            id="comment-register"
            className={validateEmail ? " error" : " visible error"}
          >
            Email debe contener un @ y al menos un punto
          </span>
        </div>

        <div className="inputContainer">
          <input
            className={validatePassword ? "" : "inputError-register"}
            value={userPassword}
            onChange={onChangePassword}
            placeholder="Ingrese su Password"
            name="password"
            type="password"
          />
          <span
            id="comment-register"
            className={validatePassword ? " error" : " visible error"}
          >
            Password debe contener mas de 6 letras y un punto
          </span>
        </div>

        <Link className="style" to="/coins">
          <button disabled={boton} onClick={notify} className="btn">
            GO TO MARKET COINS
          </button>
          <ToastContainer />
        </Link>
      </div>
    </div>
  );
}
export default Register;
