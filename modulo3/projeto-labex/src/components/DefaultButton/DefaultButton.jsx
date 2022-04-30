import React from 'react';
import { Botao } from './styles';

export function DefaultButton(props) {
  return (
    <Botao onClick={props.onClick}>{props.text}</Botao>
  );
;} 