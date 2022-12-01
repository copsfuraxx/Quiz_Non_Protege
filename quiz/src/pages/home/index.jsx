import './styles/index.css';
import Header from '../../components/header/index'
import QuestionAnswer from '../../components/question-answer/index'
import Joueurs from '../../components/joueurs/index'

function Home()
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
        </body>
    )
}

export default Home;