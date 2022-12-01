import Answer from '../../components/question-answer/answer/index'
import Question from '../../components/question-answer/question/index'

function QuestionReponse()
{
    return (
        <div>
            <h1 className='title'>Quizz non-protégé</h1>
            <Question/>
            <Answer titreAnswer="Answer 1"/>
            <Answer titreAnswer="Answer 2"/>
            <Answer titreAnswer="Answer 3"/>
            <Answer titreAnswer="Answer 4"/>
        </div>
    )
}

export default QuestionReponse;