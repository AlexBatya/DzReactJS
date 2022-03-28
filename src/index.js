import React from 'react';
import ReactDOM from 'react-dom';
import {MessageList} from './components/App.jsx';
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