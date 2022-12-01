import Answer from '../../components/question-answer/answer/index'
import Question from '../../components/question-answer/question/index'

function QuestionReponse()
{
    return (
        <div>
            <h1 className='title'>Quizz non-protégé</h1>
            <Answer/>
            <Question titreQuestion="Question 1"/>
            <Question titreQuestion="Question 2"/>
            <Question titreQuestion="Question 3"/>
            <Question titreQuestion="Question 4"/>
        </div>
    )
}

export default QuestionReponse;