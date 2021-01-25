import React from 'react';

const Card = ({ movie }) => {
    return (
        <div>
            
            <img src={movie.img.src} alt={movie.img.alt} width='200' />
            <p>{`Nomination: ${movie.nomination}`}</p>
        </div>
    );
};

export default Card;
//<h2>{`#${movie.nomination} - ${movie.title} (${movie.year})`}</h2>