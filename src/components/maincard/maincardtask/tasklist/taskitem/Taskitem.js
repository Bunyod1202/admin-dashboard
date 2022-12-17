import React from 'react'
import "./taskitem.scss"

export  function Taskitem({index,text,info,color,chack}) {
  return (
    <li className='task-item'>
      <label htmlFor="checkboxid">
      <input className={`visually-hidden ${chack}`} id="checkboxid" type="checkbox" />
      <span className={` ${chack}${index}`} ></span>
     </label>
       <p className='texttask'> {text}</p>
        <span className='infotask' style={{backgroundColor :color}}>{info}</span>
    </li>
  )
}
