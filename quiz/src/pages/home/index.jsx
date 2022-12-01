import './styles/index.css';
import Answer from '../../components/answer/index'

function Home()
{
    return (
        <div>
            <h1 className='title'>super home</h1>
            <Answer titre="coucou" description="super description"/>
        </div>
    )
}

export default Home;