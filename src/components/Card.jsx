import React from 'react';

const Card = ({ persona }) => {
    return (
        <div className="card">
            <h2>Hola {persona.nombre} {persona.apellido}</h2>
            {
              +persona.edad < 40 ? <h2>Apenas {persona.edad} años? wow que joven!</h2> : <h2>{persona.edad} años cuanta experiencia!</h2>
            }
            <h2>Es un gusto conocerte!</h2>
        </div>
    );
};

export default Card;
