import React from 'react'
import { Taskitem } from '../taskitem/Taskitem'
import "./tasklists.scss"

export function Tasklists() {

    const tasks = [
    {
        text: "Finish ticket update",
        info: "Urgent"
    },
    {
        text: "Create new ticket example",
        info: "New"
    },
    {
        text: "Update ticket report",
        info: "Default"
    },

    ]


  return (

        <div>
            <form className='taskform'>
                <input className='task-input' type="text" placeholder='Create new task' aria-label='Create new task' />
                <button className='task-btn'>+</button>
            </form>
            <ul className='tasks-list'>
                {
                tasks.map(item => <Taskitem  text={item.text} info={item.info} /> )
                }
            </ul>
        </div>
  )
}
