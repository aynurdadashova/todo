import React, { useState } from 'react'
import { Checkbox } from '../Checkbox'
import style from './todoCreate.module.scss'
export const TodoCreate = ({add}) => {
    const[done, setDone]=useState(false)
    const[title, setTitle]=useState('')


  return (
    <div className={style.create}>
        <Checkbox checked={done} onClick={()=>{
            setDone((prev)=>!prev)
        }} />
        <input type="text" className={style.create__input} value={title} placeholder='Create a new todo…' onChange={(e)=>{
            setTitle(e.target.value);
        }}
        onKeyDown={(e) => {
            if (e.code === 'Enter') {
                add(title, done);
                setDone(false);
                setTitle('');
                
            }
        }}
        />
    </div>
  )
}
