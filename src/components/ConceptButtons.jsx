import React from 'react';
import style from './style/ConceptButtons.module.scss';

const ConceptButtons = ({ icone, title, arg }) => {
  return (
    <ul className={style.allConceptButton}>
      <li className={style.apparentButton}>
        <img src={icone} alt="icone" />
        <div>{title}</div>
      </li>
      <ul className={style.ulConceptBtn}>{arg && arg.map((element) => <li key={element}>{element}</li>)}</ul>
    </ul>
  );
};

export default ConceptButtons;
