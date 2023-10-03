import React, { useState } from 'react'
import "./loginStyle.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);

  const users = JSON.parse(localStorage.getItem("users"));
  const navigate = useNavigate();
  

  const handleLogin = () => {
    let found = false;

    users.forEach(user => {
      if (user.email === email && user.password === password) {
        localStorage.setItem("currentUser",JSON.stringify(user))

        found = true;
      }
    });

    if (found) {
      setCheck(true);
      alert("User Verified");
      navigate('/display');
    } else {
      alert("Wrong credentials");
    }
  }

  return (
    <div className='bc'>
      <div className="login">
        <h1>Login</h1>
        <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your Email"></input>
        <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your Password" ></input>
        <div className="button-login" onClick={handleLogin}>Login</div>
        <div>or</div>
        <div className="button-reg" onClick={() => navigate("/")}>Register</div>
      </div>
    </div>
  )
}

export default Login;
