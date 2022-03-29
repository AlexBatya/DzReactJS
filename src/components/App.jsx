import React from 'react';
import '../index.scss'
import { useEffect,useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Header from './Header'
import {Message} from './Message'
import { ButtonMess } from './Button';


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
        fullWidth
        autoFocus={true}
        onKeyPress={handlePressInput}
        label="Введите сообщение" 
        variant="standard"
        value={value}
        onChange = {(e)=>setValue(e.target.value)}
        />
        <ButtonMess 
        value={value} 
        messages={messages} 
        setMessanges={setMessanges}/>
        <div className='grid'>
          <div className='Carts'></div>
          <div className='Cart'>
            <Message messages={messages} />
          </div>
        </div>
      </h2>
    </div>
    </>
  )

}
