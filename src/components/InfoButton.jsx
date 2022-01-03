import React from 'react';
import styled from 'styled-components';

// import style from './style/Button.module.scss';

const Button = styled.button`
  height: 3vh;
  width: 200px;
  border-radius: 30px;
  border: none;
  background-color: #ffbc00;
  font-size: 1rem;
  font-weight: bold;
  margin-right: 10%;
`;

function InfoButton({ children, className }) {
  return <Button className={className}>{children}</Button>;
}

export default InfoButton;
