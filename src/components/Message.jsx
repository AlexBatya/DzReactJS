import React from 'react';
import '../index.scss'

export function Message(props){
    return (
        <div>
        {props.messages.map((message,i)=>(
            <div key={i}>
              <h2>{message.autor}</h2>
              <p>{message.message}</p>
              <p>{message.date}</p>
            </div>
            ))}
        </div>
    )
}