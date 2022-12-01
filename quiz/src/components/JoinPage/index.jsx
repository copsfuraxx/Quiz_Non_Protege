import './styles/index.css';
function JoinPage(){
    return(
        <div className='pin'>
            <input className='pininput' type="text" name='pin'/>
            <input className='join' type="submit" name="connexion" value="Rejoindre la salle" placeholder='Code Pin de la salle'/>
        </div>
    )
    
}
export default JoinPage;