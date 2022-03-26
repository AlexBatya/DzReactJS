import React from 'react';
import './index.scss'
import { useEffect,useState } from 'react';


export const MessageList=()=>{
  const [value, setValue] = useState("")
  const [messages, setMessanges]= useState([
    {
      autor: 'bot',
      message: 'message 1'
    }
  ])
useEffect(()=>{
  // const TEXT = 'hello from bot';
  const lastMessages = messages[messages.length-1];
  let timerId=null;

  if(messages.length && lastMessages.autor==='User'){
    timerId = setTimeout(()=>{
      setMessanges([
        ...messages,
        {autor:'bot',message: 'hello from bot'}
      ])
    },1500)
  }
    return ()=>{
      clearInterval(timerId);
    };
  },[messages])

  return (
    <div>
      <h2>
        <input 
        placeholder='enter message'
        value={value}
        onChange = {(e)=>setValue(e.target.value)}
        />
        <button 
          onClick={()=>
            setMessanges([
              ...messages,
            {autor: "User",message: value}
            ])
          }>send message
        </button>
        <hr />
        {messages.map((message)=>(
          <div>
            <h2>{message.autor}</h2>
            <p>{message.message}</p>

          </div>
        ))}
      </h2>
    </div>
  )

}
