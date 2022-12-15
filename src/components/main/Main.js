import React from 'react'
import "./main.scss"
import { Mainheader } from './mainheader/Mainheader'
import Chart from "../../assets/images/graph.png"
import {Mainsidebarlist} from "../main/mainsidebar/mainsidebarlist/Mainsidebarlist"



export  function Main() {
  return (
    <div className='site-main'> 
        <div className='content-main'>
        <Mainheader />
        <div>
          <img className='main-img' src={Chart} alt="chart" />
        </div>
        </div>
        <div>
          <Mainsidebarlist />
        </div>
    </div>
  )
}
