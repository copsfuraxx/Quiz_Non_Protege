import Answer from '../../components/question-answer/answer/index'
import Question from '../../components/question-answer/question/index'

function QuestionReponse()
{
    return (
        <div>
            <Question/>
            <div className='answer-container'>
                <div className='top-answer-container'>
                    <div>
                        <Answer titreAnswer="Le VIH"/>
                    </div>
                    <div>
                        <Answer titreAnswer="La grippe"/>
                    </div>
                </div>
                <div className='bot-answer-container'>
                    <div>
                        <Answer titreAnswer="Les micoses"/>
                    </div>
                    <div>
                        <Answer titreAnswer="La scifilice"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionReponse;