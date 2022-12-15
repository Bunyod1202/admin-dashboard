import React from 'react'
import "./taskheader.scss"

export  function Taskheader() {
  return (
    <div className='task-header'>
        <div>
            <h3 className='task-header-title'>Tasks</h3>
            <p className='task-header-text'>Today</p>
        </div>
        <button className='details-link' type='button'>
        View all
        </button>
    </div>
  )
}
