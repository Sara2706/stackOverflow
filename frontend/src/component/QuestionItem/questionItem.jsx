import './questionItem.scss'
import { Link } from "react-router-dom";


function QuestionItem({ value }) {
    const tag = value.tag;
    return (
        <>
            <div className='questionItem'>
                <h3><Link to={'/question/'+value._id} className='link' state={value}>{value.title}</Link></h3>
                <div className="tagAndTime">
                    <div className="tag">
                        {tag.map((item, index) => {
                            return <h6 key={index}>{item}</h6>
                        })}
                    </div>
                    <div className="time">
                        <p>{value.createdAt}</p>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default QuestionItem