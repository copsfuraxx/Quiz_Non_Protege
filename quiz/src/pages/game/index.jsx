import './styles/index.css';
import Header from '../../components/header/index'
import QuestionAnswer from '../../components/question-answer/index'
import Joueurs from '../../components/joueurs/index'
import Footer from '../../components/footer/index'

function game()
{
    return (
        <body>
        <Header/>
            <div className="container-answer-question-joueurs">
                <div className='container-question_answer'>
                    <QuestionAnswer/>
                </div>
                <div>
                    <Joueurs/>
                </div>
            </div>
      
                    <Footer/>
            
        </body>
    )
}

export default game;