import './styles/index.css';
import Answer from '../../components/answer/index'
import Question from '../../components/question/index'

function Home()
{
    return (
        <div>
            <h1 className='title'>salut evan</h1>
            <Answer titre="coucou" description="super description"/>
            <Question/>
        </div>
    )
}

export default Home;