import './styles/index.css';

import React, {useEffect, useState} from 'react'

function JoinPage({socket}){

    const [messages, setMessages] = useState([])

    function hostGame()
    {
        socket.emit('askHost');
    }

    useEffect(() => {
        socket.on('coucouback', (data) => setMessages(data))
    }, [socket, messages])

    return(
        <div>
            <div className='create-title'>
                <h2>Créez votre salon</h2>
            </div>
            {messages}
            <div className='pin2'>
                <button className='join' name="connexion">Générer un code pin</button>
            </div>
            <div className='create-team'>
                <a href="/">Rejoindre une salle</a>
            </div>
            <div className='home-footer2'>
                <p>Copyright © Quizz non-protégé 2022</p>
            </div>
        </div>
    )
    
}
export default JoinPage;