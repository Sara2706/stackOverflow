import { useState,useContext } from 'react'
import { login } from '../../context/apiCalls';
import { AuthContext } from '../../context/AuthContext';
import './loginComponent.scss'

function LoginComponent() {
  const {dispatch ,err} = useContext(AuthContext);
  const [userData, setUserDate] = useState('')

  const handleChange = (e) => {
    const value= e.target.value;
    setUserDate({...userData,[e.target.name]:value})
    
  }
  const handleLogin = (e) => {
    e.preventDefault();
    login(userData,dispatch)
    // console.log(userData)
  }
  return (
    <form className='loginForm'>
      {err && <span style={{color:'red'}}>Invalid username or password</span>}
      <div className='formInput'>
        <label>Email</label>
        <input type="text" placeholder='Email' name='email'  onChange={handleChange} required/>
      </div>
      <div className='formInput'>
        <label>Password</label>
        <input type="password" placeholder='Password' name='password' onChange={handleChange} required/>
      </div>
      <button onClick={handleLogin}>Login</button>
    </form>
  )
}

export default LoginComponent
