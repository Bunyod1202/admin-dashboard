import React from 'react'
import "./taskitem.scss"

export  function Taskitem({text,info,color}) {
  return (
    <li className='task-item'>
      <label htmlFor="checkboxid">
      <input className='none visually-hidden ' id="checkboxid" type="checkbox" />
      <span className={`done ${info}`} ></span>
     </label>
       <p className='texttask'> {text}</p>
        <span className='infotask' style={{backgroundColor :color}}>{info}</span>
    </li>
  )
}
