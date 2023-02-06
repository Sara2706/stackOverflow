import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './registerComponent.scss'
import { useRef } from 'react';

function RegisterComponent() {
  const [err, setErr] = useState('')
  const [userData, setUserDate] = useState('')
  const navigate = useNavigate();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();


  const handleChange = (e) => {
    const value = e.target.value;
    setUserDate({ ...userData, [e.target.name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userNameRef.current.value === '' || emailRef.current.value === '' || passwordRef.current.value === '') {
      setErr('Invalid user details')
    } else {
      const req = await axios.post('auth/register', userData).then(() => console.log('Success')).catch((error) => setErr(error.response.data))
      if (err === '') {
        console.log(err)
      } else {
        navigate('/login')

      }
    }

  }
  return (
    <form className='registerForm'>
      <span style={{ color: 'red' }}>{err}</span>
      <div className='formInput'>
        <label>Username</label>
        <input type="text" placeholder='Username' name='userName' ref={userNameRef} onChange={handleChange} required />
      </div>
      <div className='formInput'>
        <label>Email</label>
        <input type="text" placeholder='Email' name='email' ref={emailRef} onChange={handleChange} required />
      </div>
      <div className='formInput'>
        <label>Password</label>
        <input type="password" placeholder='Password' name='password' ref={passwordRef} onChange={handleChange} required />
      </div>
      <button onClick={handleSubmit}>Register</button>
    </form>
  )
}

export default RegisterComponent