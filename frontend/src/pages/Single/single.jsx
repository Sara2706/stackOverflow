import './single.scss'
import Navbar from '../../component/Navbar/navbar'
import Sidebar from '../../component/Sidebar/sidebar'
import Answers from '../../component/Answers/answers'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';


function Single() {
    const [answers, setAnswers] = useState([])
    const [answer, setMyAnswers] = useState(null)
    const [search, setSearch] = useState(null)
    const [sideBar, setSideBar] = useState(false)

    const location = useLocation();
    const data = location.state;

    useEffect(() => {
        const getAnswers = async () => {
            // const res =  await axios.get(`../answer/${data._id}`)
            const res = await axios.get(`../answer/${data._id}`);
            setAnswers(res.data)
            console.log(answers)
        }
        getAnswers();

    }, [])

    const createAns = (e) => {
        const val = e.target.value;
        setMyAnswers({ [e.target.name]: val })
    }

    const postAnswer = async (e) => {
        e.preventDefault();
        const req = await axios.post(`../answer/${data._id}`, answer, {
            headers: {
                token: 'Bearer ' + JSON.parse(localStorage.getItem('user'))
            }
        });
        const val = req.data
        setAnswers([val, ...answers])
        // setAnswers([...answers, val])

    }

    return (
        <div className='single'>
            <Navbar sideBar={sideBar} setSideBar={setSideBar} setSearch={setSearch} />
            <div className="wrap">
                <Sidebar sideBar={sideBar} />
                <div className="datas">
                    <div className="question">
                        <h2>{data.title}</h2>
                        <hr />
                        <p>
                            {data.detailOfProblem}
                        </p>
                    </div>
                    <div className="answers">
                        <h3>Answers</h3>
                        {answers.map((item, index) => {
                            return <Answers key={index} value={item} />

                        })}
                    </div>
                    <div className="postAnswer">
                        <form>
                            <label>Write your answer</label>
                            <textarea rows={11} type="text" onChange={createAns} name='answer' placeholder='Write your answer here' required></textarea>
                            <button onClick={postAnswer}>Post your answer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Single