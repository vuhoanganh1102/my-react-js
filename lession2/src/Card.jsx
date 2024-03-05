import avatar from '../src/assets/img/avatar.jpg'
function Card(){
    return(
        <div className="card">
            <img className='card-image' src={avatar} alt="profile picture"></img>
            <h2 className='card-title'>Bro Code</h2>
            <p className='card-text'>I make Youtube videos and play game</p>
        </div>
    )
}

export default Card