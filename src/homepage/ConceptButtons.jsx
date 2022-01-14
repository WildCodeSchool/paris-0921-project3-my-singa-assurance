import React from 'react';
import style from './style/ConceptButtons.module.scss';

function ConceptButtons({ icone, title, arg }) {
  return (
    <ul className={style.allConceptButton}>
      <li className={style.apparentButton}>
        <img src={icone} alt="icone" />
        <div className={style.title}>{title}</div>
      </li>
      <ul className={style.ulConceptBtn}>
        {arg &&
          arg.map((element) => (
            <li key={element} className={style.btnConceptLi}>
              {element}
            </li>
          ))}
      </ul>
    </ul>
  );
}

export default ConceptButtons;
