import React from 'react'
import "./maincards.scss"
import { Maincardtasks } from './maincardtask/Maincardtasks'
import {Maincardtickets} from './maincradtickets/Maincardtickets'


export  function Maincards() {
  return (
    <div className='main-cards'>
      <Maincardtickets />
      <Maincardtasks/>
    </div>
  )
}
