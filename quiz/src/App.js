import Home from './pages/home/index'
import Game from './pages/game/index'
import {Routes,Route} from 'react-router-dom'
function App() {
    return (<div>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="game" element={ <Game/> } />
        </Routes>
        </div>
        )
}

export default App