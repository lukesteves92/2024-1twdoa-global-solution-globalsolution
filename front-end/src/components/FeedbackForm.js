import React, { useState } from 'react';
import './FeedbackForm.css';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: feedback }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        setFeedback('');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Deixe sua mensagem..."
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FeedbackForm;
