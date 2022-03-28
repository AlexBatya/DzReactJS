import React from 'react';
import '../index.scss'
import { useEffect,useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Header from './Header'


export const MessageList=()=>{
  const [value, setValue] = useState("")
  const [messages, setMessanges]= useState([
    {
      autor: 'bot',
      message: 'message 1',
      date: new Date().toLocaleDateString()
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
        {autor:'bot',message: 'hello from bot',date:new Date().toLocaleDateString()}
      ])
    },1500)
  }
    return ()=>{
      clearInterval(timerId);
    };
  },[messages])

  const sendMessanges = ()=>{
    if(value){
      setMessanges([...messages,{autor: "User",message:value,date:new Date().toLocaleDateString()}]);
      setValue('')
    }
  }

  const handlePressInput= ({code})=>{
    if(code==="Enter"){
      sendMessanges();
    }
  }

  return (
    <>
    <Header/>
    <div className='container'>
      <h2>
        <TextField
        autoFocus={true}
        onKeyPress={handlePressInput}
        label="Введите сообщение" 
        variant="standard"
        value={value}
        onChange = {(e)=>setValue(e.target.value)}
        />
        <div className='buton'>
        <Button 
          variant="contained"
          onClick={()=>
            setMessanges([
              ...messages,
            {autor: "User",message: value,date:new Date().toLocaleDateString()}
            ])
          }>send message
        </Button>
        </div>
        <hr />
        {messages.map((message,i)=>(
          <div key={i}>
            <h2>{message.autor}</h2>
            <p>{message.message}</p>
            <p>{message.date}</p>
          </div>
        ))}
      </h2>
    </div>
    </>
  )

}
