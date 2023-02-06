import './sidebar.scss'
import {Link} from 'react-router-dom'
import {  useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { logout } from '../../context/apiCalls';

function Sidebar({sideBar}) {
  const {user,dispatch} = useContext(AuthContext);
  const handleLogout =() =>{
    try {
      localStorage.removeItem('user');
      logout(dispatch)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className={sideBar ?'sidebar visble' :'sidebar hidden'}>
        <Link className='link' to='/'>Home</Link>
        <h4>
          Questions
        </h4>
          <p>New Questions</p>
          <p>Top Rated</p>
          <p>My Questions</p>
        <h4>
          Answers
        </h4>
          <p>New Answers</p>
          <p>My Answers</p>
        <Link className='link' to='/login' onClick={handleLogout}>Logout</Link>
    </div>
  )
}

export default Sidebar