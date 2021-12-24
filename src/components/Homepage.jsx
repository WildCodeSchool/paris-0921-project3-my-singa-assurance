import React from 'react';
import styled from 'styled-components';

import InfoButton from './InfoButton';

// import style from './style/Homepage.module.scss';

const ModifiedInfoButton = styled(InfoButton)`
  height: 5vh;
  width: 600px;
  font-size: 1.5rem;
`;

function Homepage() {
  return (
    <main>
      <div container>
        <div left>
          <h1>Singa, l&apos;assurance santé pour vos proches en RDC</h1>
          <p>Nous croyons que l&apos;Afrique mérite d&apos;avoir accès à des soins de qualité.</p>
          <p>Singa permet à la diaspora d&apos;offir à leurs proches une mutuelle santé simple, solidaire et utile.</p>
          <p>Et tout ça en soutenant des causes qui ont un impact positif sur l&apos;économie locale</p>
          <ModifiedInfoButton>Consulter les offres</ModifiedInfoButton>
        </div>
        <div right></div>
      </div>
    </main>
  );
}

export default Homepage;
