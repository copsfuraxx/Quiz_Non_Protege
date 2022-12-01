import './styles/index.css';
function JoinPage(){
    return(
        <div>
            <div className='big-logo'>

            </div>
            <div className='pin'>
                <input className='pininput' type="text" name='pin'/>
                <input className='join' type="submit" name="connexion" value="Rejoindre la salle" placeholder='Code Pin de la salle'/>
            </div>
        </div>
    )
    
}
export default JoinPage;