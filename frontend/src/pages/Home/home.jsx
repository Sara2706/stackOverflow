import './home.scss'
import Navbar from '../../component/Navbar/navbar'
import Sidebar from '../../component/Sidebar/sidebar'
import TopBar from '../../component/HomeTopBar/topBar'
import QuestionList from '../../component/Questionlist/questionList'
import axios from 'axios'
import { useEffect, useState } from 'react';

function Home() {
  const [questions, setQuestions] = useState([])
  const [sort, setSort] = useState(null)
  const [search, setSearch] = useState(null)
  const [sideBar, setSideBar] = useState(false)

  useEffect(() => {
    const getQuestions = async () => {
      const res = await axios.get(`question/?${sort ? `sort=${sort}` : ''}${search ? `&search=${search}` : ''}`)
      setQuestions(res.data)
    }
    getQuestions();
  }, [sort, search])
  return (
    <div className='homeWrapper'>
      <Navbar sideBar={sideBar} setSideBar={setSideBar} setSearch={setSearch} />
      <div className="wrap">
        <Sidebar sideBar={sideBar} />

        <div className="questuins">
          <TopBar setSort={setSort} />
          <hr />
          <QuestionList questions={questions} />
        </div>
      </div>
    </div>
  )
}

export default Home