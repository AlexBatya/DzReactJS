import React from 'react';
import Button from '@mui/material/Button';
import '../index.scss'

export function ButtonMess(props){
    return (
        <div className='buton'>
        <Button 
          variant="contained"
          onClick={()=>
            props.setMessanges([
              ...props.messages,
            {autor: "User",message: props.value,date:new Date().toLocaleDateString()}
            ])
          }>send message
        </Button>
        </div>
    )
}