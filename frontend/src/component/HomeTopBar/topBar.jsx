import './topBar.scss'
import { useNavigate } from "react-router-dom";


function TopBar({setSort}) {
  const navigate = useNavigate();
  const handleGoToAddQues = () => {
    navigate('/addquestion')
  }
  return (
    <div className='topBar'>
        <div className="top">
            <h2>Top question</h2>
            <button onClick={handleGoToAddQues}>Ask a question</button>
        </div>
        <div className="sort">
            <h4 onClick={()=>setSort(null)}>Random</h4>
            <h4 onClick={()=>setSort('nto')}>New to Old</h4>
            <h4 onClick={()=>setSort('otn')}>Old to New</h4>
        </div>
    </div>
  )
}

export default TopBar