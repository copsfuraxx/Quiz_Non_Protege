
import JoinPage from '../../components/JoinPage/index'

function Home({socket})
{
    return (
        <body>
            <JoinPage socket={socket}/>

        </body>
    )
}

export default Home;