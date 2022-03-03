import React from 'react';
import ReactDOM from 'react-dom';
import {Massang} from './App';
import './index.scss'

function App(){
  return (
    <Massang classname='Massang' content='hi, bro'/>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);