import './answers.scss'

function Answers({ value }) {
    return (

        <div className='answer' key={value._id}>
            <div className="top">
                <h6>{value.username}</h6>
                <p>{value.createdAt}</p>
            </div>
            <p>
                {value.answer}
            </p>

            <hr />
        </div>
    )
}

export default Answers