import React from 'react';
import style from './style/ConceptButtons.module.scss';

const ConceptButtons = ({ icone, title, arg }) => {
  return (
    <div className={style.allConceptButton}>
      <div className={style.apparentButton}>
        <img src={icone} alt="icone" />
        <div>{title}</div>
      </div>
      <ul className={style.ulConceptBtn}>{arg && arg.map((element) => <li key={element}>{element}</li>)}</ul>
    </div>
  );
};

export default ConceptButtons;
