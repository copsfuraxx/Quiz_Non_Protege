import './styles/index.css';
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function JoinPage({socket}){
    const [messages, setMessages] = useState([])
    const navigate = useNavigate();

    function hostGame()
    {
        socket.emit('askHost');
    }

    useEffect(() => {
        socket.on('joinedRoom', (data) => navigate('/my-room', {state:{pin:data.pin, users: data.users}}));
    }, [socket, messages])

    return(
        <div>
            <div className='big-logo'>
            </div>
            {messages}
            <div className='pin'>
                <input className='pin-input' type="text" name='pin' placeholder='Code Pin de la salle'/>
                <button className='join' name="connexion">Rejoindre du Jeu</button>
            </div>
            <div className='create-team'>
                <button onClick={() => hostGame()}>Créez votre salle</button>
            </div>
            <div className='home-footer'>
                <p>Copyright © Quizz non-protégé 2022</p>
            </div>
        </div>
    )
    
}
export default JoinPage;