import RegisterComponent from '../../component/Register/registerComponent'
import './register.scss'
import { Link } from "react-router-dom";


function Register() {
  return (
    <div className='registerWrapper'>
        <img src="https://www.logo.wine/a/logo/Stack_Overflow/Stack_Overflow-Icon-Logo.wine.svg" className='logo' alt="Logo error" />
        <RegisterComponent />
        <div className="bottom">
          <p>Already have a account? <Link to='/login'>Login</Link></p>
        </div>
    </div>
  )
}

export default Register