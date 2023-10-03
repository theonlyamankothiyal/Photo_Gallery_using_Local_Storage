import React, { useState } from 'react'
import "./regesterStyle.css"
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const obj = {
      name,
      email,
      password,
      reEnterPassword
    };

    let data = JSON.parse(localStorage.getItem("users")) || []; 
    /* use for retrieving data from local storage.
     If the users key value is null or undefined,then the empty array [] is assigned to data instead. */

    const newUser = [...data, obj];

    localStorage.setItem("users", JSON.stringify(newUser));
    /* sets the value of the users key in local storage to the JSON string representation of the newUser object. */
    navigate('/login');
  }

  return (
    <div className='bg'>
      <div className="register">
        <h1>Register</h1>
        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Your Name" required></input>
        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Your Email" required></input>
        <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Your Password" required></input>
        <input type="password" value={reEnterPassword} onChange={(e) => { setReEnterPassword(e.target.value) }} placeholder="Re-enter Password" required></input>
        <button className='button-reg' onClick={handleRegister}>Register</button>
        <div>or</div>
        <button className='login' onClick={() => navigate("/login")}>Login</button>
      </div>
    </div>
  )
}

export default Register
