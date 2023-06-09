import React from 'react';

const Card = ({ email, name,  id }) => {
    
    return(
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${id}?200x200`} alt="" />
        <div>
            <h2 className="name">{name}</h2>
            <p className="email">{email}</p>
        </div>
    </div>);
}

export default Card;