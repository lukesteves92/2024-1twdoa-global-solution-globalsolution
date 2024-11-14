import React from 'react';
import './ArticleCard.css';

function ArticleCard({ title, content }) {
  return (
    <div className="article-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default ArticleCard;
