import React from 'react';

const ConceptButtons = ({ icone, title, arg }) => {
  return (
    <div>
      <div>
        <img src={icone} alt="icone" />
        <div>{title}</div>
      </div>
      <div>{arg}</div>
    </div>
  );
};

export default ConceptButtons;
