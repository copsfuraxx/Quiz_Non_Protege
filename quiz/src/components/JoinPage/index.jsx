import './styles/index.css';

import React, {useEffect, useState} from 'react'

function JoinPage({socket}){

    const [messages, setMessages] = useState([])

    function hostGame()
    {
        socket.emit('askHost');
    }

    useEffect(() => {
        socket.on('new player', (data) => console.log(data))
    }, [socket, messages])

    return(
        <div>
            <div className='big-logo'>
            </div>
            {messages}
            <div className='pin'>
                <input className='pin-input' type="text" name='pin' placeholder='Code Pin de la salle'/>
                <button className='join' name="connexion" onClick={()=>hostGame()}>Rejoindre le salon</button>
            </div>
            <div className='create-team'>
                <a href="/create-room">Créez votre salle</a>
            </div>
            <div className='home-footer'>
                <p>Copyright © Quizz non-protégé 2022</p>
            </div>
        </div>
    )
    
}
export default JoinPage;