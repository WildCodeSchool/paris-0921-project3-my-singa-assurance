import React from 'react';

const ConceptCard = ({ title, src, desc }) => {
  return (
    <div className="ProjectCardContainer">
      <h1 className="CardTitle">{title}</h1>
      <div>
        <img className="CardImage" src={src} alt={title} />
      </div>
      <div className="CardDescription">{desc}</div>
    </div>
  );
};

export default ConceptCard;
