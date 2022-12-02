import './styles/index.css';
import Answer from '../../components/question-answer/answer/index'
import Question from '../../components/question-answer/question/index'

function QuestionReponse()
{
    return (
        <div className='game-container'>
            <div className='logo'>
                
            </div>
            <Question/>
            <div className='answer-container'>
                <div>
                  <Answer titreAnswer="Le VIH"/>

                 <Answer titreAnswer="La grippe"/>
                </div><div>
                <Answer titreAnswer="Les micoses"/>

                <Answer titreAnswer="La scifilice"/>
                </div>
            </div>
        </div>
    )
}

export default QuestionReponse;