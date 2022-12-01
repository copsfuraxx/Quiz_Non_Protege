import Answer from '../../components/question-answer/answer/index'
import Question from '../../components/question-answer/question/index'

function QuestionReponse()
{
    return (
        <div>
            <h1 className='title'>Quizz non-protégé</h1>
            <Question/>
            <div className='answer-container'>
                <div className='top-question-container'>
                    <div>
                        <Answer className="" titreAnswer="Answer 1"/>
                    </div>
                    <div>
                        <Answer titreAnswer="Answer 2"/>
                    </div>
                </div>
                <div className='bot-question-container'>
                    <div>
                        <Answer titreAnswer="Answer 3"/>
                    </div>
                    <div>
                        <Answer titreAnswer="Answer 4"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionReponse;