import './styles/index.css'
function Myroom(){
    return(
        <div>
            <div className='my-room'>
                <h2>Votre salon :</h2>
            </div>
            <div>
                <div className='my-room-content'>
                    <div className='left-content'>
                        <div>
                            <h5 className='first-h5'>votre code pin</h5>
                            <h6>548 082</h6>
                        </div>
                        <div>
                            <h5>participants</h5>
                            <h6 className='last-h6'>8</h6>
                        </div>
                        <button>Lancer le quizz</button>
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