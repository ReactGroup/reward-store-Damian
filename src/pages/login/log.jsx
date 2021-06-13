import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function LoginCard() {
  const [userName, setUserName] = useState("");
  const [validateUsername, setValidateUsername] = useState(false);
  const [userPassword, setUserPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState(false);
  const [boton, habilitarBoton] = useState(true);

  const onChangePassword = (e) => {
    setUserPassword(e.target.value);
  };

  useEffect(() => {
    if (userName.length !== 0) {
      setValidateUsername(userName === "username");
    }
  }, [userName]);

  useEffect(() => {
    if (userPassword.length !== 0) {
      setValidatePassword(userPassword === "password");
    }
  }, [userPassword]);

  useEffect(() => {
    if (!!validateUsername && !!validatePassword) {
      habilitarBoton(false);
    } else {
      habilitarBoton(true);
    }
  }, [validateUsername, validatePassword]);

  return (
    <div className="flex-container centered">
      <div className="card ">
        <div className="regla title">
          <p className="title-form">Login Form</p>
        </div>
        <div className="regla">Username: Admite el valor "username".</div>
        <div className="regla">Password: Admite el valor "password".</div>
        <div className="inputContainer">
          <input
            className={validateUsername ? "" : "inputError-login"}
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            autoComplete="off"
            placeholder="Ingrese su nombre de Usuario"
            name="username"
            type="text"
          />
        </div>
        <div className="inputContainer">
          <input
            className={validatePassword ? "" : "inputError-login"}
            value={userPassword}
            onChange={onChangePassword}
            placeholder="Ingrese su Password"
            name="password"
            type="password"
          />
        </div>

        <Link className="style" to="/coins">
          <button disabled={boton} className="btn-register">
            LOGIN
          </button>
        </Link>

        <p className="register-link">
          Don´t have an account?
          <Link className="style-em" to="/register">
            <em className="style-em"> Sing Up Now </em>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginCard;
