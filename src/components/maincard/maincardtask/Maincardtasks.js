import React from 'react'
import "./maincardtasks.scss"
import { Taskheader } from './taskheader/Taskheader'
import { Tasklists } from './tasklist/tasklists/Tasklists'

export function Maincardtasks() {
    return (
   <div className='task-card'>
      <Taskheader />  
      <Tasklists /> 
   </div>
    )
}


