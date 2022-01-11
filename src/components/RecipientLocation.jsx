import React from 'react';

function RecipientLocation() {
  const Emoji = (props) => (
    <span className="emoji" role="img" aria-label={props.label ? props.label : ''} aria-hidden={props.label ? 'false' : 'true'}>
      {props.symbol}
    </span>
  );

  return (
    <div>
      <h2>On vérifie les centres de soins couverts par Singa ? </h2>
      <h2>
        Sinon, passons directement à notre formule ! <Emoji label="backHand Index pointing right" symbol="👉" />
      </h2>
    </div>
  );
}

export default RecipientLocation;
