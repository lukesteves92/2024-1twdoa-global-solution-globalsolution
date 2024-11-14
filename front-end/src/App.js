import React, { useState, useEffect } from 'react';
import './App.css';
import ArticleCard from './components/ArticleCard';
import FeedbackForm from './components/FeedbackForm';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sustentabilidade e Energia Sustentável</h1>
        <p>Inspirando a transição para um futuro mais limpo e renovável</p>
      </header>
      <main>
        <section className="articles-section">
          <h2>Artigos em Destaque</h2>
          <div className="articles-grid">
            {articles.map((article) => (
              <ArticleCard key={article.id} title={article.title} content={article.content} />
            ))}
          </div>
        </section>
        <section className="feedback-section">
          <h2>Envie seu Feedback</h2>
          <FeedbackForm />
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Sustentabilidade e Energia Sustentável. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
