import React, { useState } from 'react';
import Card from './Card';  // Importa el componente Card

const Form = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input1.trim().length >= 3 && input2.length >= 6) {
      setSubmittedData({ input1, input2 });
      setError('');
    } else {
      setError('Por favor chequea que la información sea correcta');
      setSubmittedData(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Input 1:</label>
          <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
        <div>
          <label>Input 2:</label>
          <input
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {submittedData && <Card input1={submittedData.input1} input2={submittedData.input2} />}
    </div>
  );
};

export default Form;
