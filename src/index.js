import React from 'react';
import ReactDOM from 'react-dom';
import {MessageList} from './App';
import './index.scss'

function App(){
  return (
    <MessageList/>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);