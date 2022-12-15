import React from 'react'
import {Mainsidebaritem} from "../mainsidebaritem/Mainsidebaritem"
import "./mainsidebarlist.scss"

export  function Mainsidebarlist() {
    
    const sidebarList = [
        {
            text: "Resolved",
            number: "449",
        },
        {
            text: "Received",
            number: "426",
        },
        {
            text: "Average first response time",
            number: "33m",
        },
        {
            text: "Average response time",
            number: "3h 8m",
        },
        {
            text: "Resolution within SLA",
            number: "94%",
        },
        
    ]
    
    return (
        <ul className='sidebar-list'>
            {
            sidebarList.map(item => <Mainsidebaritem  text={item.text} num={item.number} />)
            }
        </ul>
    )
 }
    