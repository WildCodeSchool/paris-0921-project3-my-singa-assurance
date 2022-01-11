import React from 'react';
import style from './style/SubscriberHasRecipients.module.scss';

function SubscriberHasRecipients() {
  return (
    <div className={style.recipientsMainContainer}>
      <div className={style.recipientTitle}>Mes bénéficiaires</div>
    </div>
  );
}
export default SubscriberHasRecipients;
