import './styles/index.css';
import QuestionAnswer from '../../components/question-answer/index'
import Joueurs from '../../components/joueurs/index'

function game()
{
    return (
        <body>
            <div className="container-answer-question-joueurs">
                <div className='container-question_answer'>
                    <QuestionAnswer/>
                </div>
                <div>
                    <Joueurs/>
                </div>
            </div>
      
                           
        </body>
    )
}

export default game;