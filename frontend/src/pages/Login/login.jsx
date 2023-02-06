import LoginComponent from '../../component/Login/loginComponent'
import './login.scss'
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className='loginWrapper'>
        <img src="https://www.logo.wine/a/logo/Stack_Overflow/Stack_Overflow-Icon-Logo.wine.svg" className='logo' alt="Logo error" />
        <LoginComponent />
        <div className="bottom">
          <p>Don't have a account? <Link to='/register' className='link'>Register</Link></p>
        </div>
    </div>
  )
}

export default Login
