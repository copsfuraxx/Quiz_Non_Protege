import './styles/index.css';
function JoinPage(){
    return(
        <div>
            <div className='big-logo'>

            </div>
            <div className='pin'>
                <input className='pin-input' type="text" name='pin' placeholder='Code Pin de la salle'/>
                <button className='join' name="connexion">Rejoindre du Jeu</button>
            </div>
            <div className='home-footer'>
                <p>Copyright © Quizz non-protégé 2022</p>
            </div>
        </div>
    )
    
}
export default JoinPage;