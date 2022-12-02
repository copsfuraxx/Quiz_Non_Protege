import Home from './pages/home/index'
import Game from './pages/game/index'
import {Routes,Route} from 'react-router-dom'
import socketIO from 'socket.io-client'

const socket = socketIO.connect('http://lores-webServer.ddns.net')

function App() {
    return (<div>
        <Routes>
          <Route path="/" element={ <Home socket={socket}/> } />
          <Route path="game" element={ <Game socket={socket}/> } />
        </Routes>
        </div>
        )
}

export default App