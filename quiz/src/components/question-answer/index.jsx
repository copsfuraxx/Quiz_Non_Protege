import Answer from '../../components/question-answer/answer/index'
import Question from '../../components/question-answer/question/index'

function QuestionReponse()
{
    return (
        <div>
            <h1 className='title'>Quizz non-protégé</h1>
            <Question/>
            <div>
                <Answer className="" titreAnswer="Answer 1"/>
            </div>
            <div>
                <Answer titreAnswer="Answer 2"/>
            </div>
            <div>
                <Answer titreAnswer="Answer 3"/>
            </div>
            <div>
                <Answer titreAnswer="Answer 4"/>
            </div>
        </div>
    )
}

export default QuestionReponse;