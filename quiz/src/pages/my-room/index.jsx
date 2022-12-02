import './styles/index.css'
import {useLocation} from 'react-router-dom'
import React, {useState} from 'react';
import { useEffect } from 'react';

function Myroom({socket}){

    const [participant, setParticipant] = useState([])
    const [pseudo, setPseudo] = useState()
    const location = useLocation();
    const [users, setUsers] = useState(location.state.users)

    useEffect(() => setParticipant(users.length), [])
    useEffect(() => {
        socket.on('pseudo changed', (data) => setUsers(data));
    }, [socket, users])

    function changePseudo()
    {
        console.log("je change mon nom " + pseudo)
        socket.emit("changePseudo", pseudo)
    }

    return(
        <div>
            <div className='my-room'>
                <h2>Votre salon :</h2>
                {users.map(function(d, idx){
                    return (<li key={idx}>{d.pseudo}</li>)
                })}
            </div>
            <div>
                <div className='my-room-content'>
                    <div className='left-content'>
                        <div>
                            <h5 className='first-h5'>votre code pin</h5>
                            <h6>{location.state.pin}</h6>
                        </div>
                        <div>
                            <h5>participants</h5>
                            <h6 className='last-h6'>{participant}</h6>
                        </div>
                      
                            <input type="text" placeholder='Votre nom' onChange={(e) => setPseudo(e.target.value)}/>
                            <button onClick={() => changePseudo()}>Valider</button>
                        
                    </div>
                    <div className='right-content'>
                        <div className='left-right-content'>
                            <div className='user'><h6>Ethan</h6></div>
                            <div className='user'><h6>Corentin</h6></div>
                            <div className='user'><h6>Evan</h6></div>
                            <div className='user'><h6>Guillaume</h6></div>
                        </div>
                        <div>
                            <div className='user'><h6>François</h6></div>
                            <div className='user'><h6>Eliott</h6></div>
                            <div className='user'><h6>Lisa</h6></div>
                            <div className='user'><h6>Maureen</h6></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Myroom