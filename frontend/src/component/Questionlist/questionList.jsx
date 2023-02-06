import './questionList.scss'
import QuestionItem from '../QuestionItem/questionItem'

function QuestionList({questions}) {
  return (
    <div className='questionList'>
      {questions.map((item) => (
        <QuestionItem key={item._id} value={item}/>

      ))}
    </div>
  )
}

export default QuestionList