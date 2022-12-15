import React from 'react'
import "./taskitem.scss"

export  function Taskitem({text,info}) {
  return (
    <li className='task-item'>
        <input className='done' type="checkbox" />
       <p className='texttask'> {text}</p>
        <span className='infotask'>{info}</span>
    </li>
  )
}
