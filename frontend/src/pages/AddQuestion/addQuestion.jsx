import './addQuestion.scss'
import Navbar from '../../component/Navbar/navbar'
import Sidebar from '../../component/Sidebar/sidebar'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import axios from 'axios';

function AddQuestion() {
  const [tags, setTags] = useState([]);
  const [data, setData] = useState('')

  const handleTag = (e) => {
    if (e.key !== 'Enter') return
    const value = e.target.value;
    if (!value.trim()) return
    setTags([...tags, value])
    e.target.value = ''
  }

  const handleChange = (e) => {
    const value = e.target.value
    setData({ ...data, [e.target.name]: value })
  }

  const handleAddQuestion = async (e) => {
    e.preventDefault();
    if (e.key !== 'Enter') {
      const val = { ...data, tag: tags }
      const res = await axios.post('question', val, {
        headers: {
          token: 'Bearer ' + JSON.parse(localStorage.getItem('user'))
        }
      })

    }
  }
  return (
    <div className='addQuestion'>
      <Navbar />
      <div className="wrap">
        <Sidebar />
        <form className="inputs">
          <h1>Add Question</h1>
          <div className="inputData">
            <label>Write your question title here</label>
            <input type="text" placeholder='Question title' name='title' onChange={handleChange} required />
          </div>
          <div className="inputData">
            <label>Write your details of the question</label>
            <textarea rows={11} type="text" placeholder='Question description' name='detailOfProblem' onChange={handleChange} required></textarea>
          </div>
          <div className="inputData">
            <label>Add tags to similar to youur question</label>
            <input type="text" placeholder='Question tags' onKeyDown={handleTag} required={tags.length === 0 ? true : false} />
            <div className="tags">
              {tags.map((item, i) => {
                return (
                  <div key={i} className='item'>
                    <span>{item}</span>
                    <button><CloseIcon /></button>
                  </div>
                )
              })}
            </div>
          </div>
          <button onClick={handleAddQuestion}>Post your question</button>
        </form>
      </div>
    </div>
  )
}

export default AddQuestion