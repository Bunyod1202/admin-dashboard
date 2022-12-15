import React from 'react'
import { Taskitem } from '../taskitem/Taskitem'
import "./tasklists.scss"

export function Tasklists() {

    const tasks = [
    {
        text: "Finish ticket update",
            info: "Urgent",
        color: "#FEC400"
    },
    {
        text: "Create new ticket example",
        info: "New",
        color: "#29CC97"
    },
    {
        text: "Update ticket report",
        info: "Default",
        color: "#F0F1F7"
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
                tasks.map(item => <Taskitem  text={item.text} info={item.info} color={item.color} /> )
                }
            </ul>
        </div>
  )
}
