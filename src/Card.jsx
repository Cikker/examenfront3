import React from 'react';  // Importar React

function Card({ input1, input2 }) {
  return (
    <div style={{ border: '1px solid black', padding: '10px', marginTop: '10px' }}>
      <h2>Información Ingresada</h2>
      <p>Input 1: {input1}</p>
      <p>Input 2: {input2}</p>
    </div>
  );
}

export default Card;
