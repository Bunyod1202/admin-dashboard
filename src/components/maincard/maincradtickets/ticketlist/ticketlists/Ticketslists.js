import React from 'react'
import { Ticketitem } from '../ticketitem/Ticketitem'
import "./ticketlists.scss"



export  function Ticketslists() {
    
    const ticketlist = [
        {
            text: "ResoWaiting on Feature Requestlved",
            number: "4238",
        },
        {
            text: "Awaiting Customer Response",
            number: "1005",
        },
        {
            text: "Awaiting Developer Fix",
            number: "914",
        },
        {
            text: "Pending",
            number: "281",
        },
      
        
    ]
    
    return (
        <ul className='ticket-list'>
            {
            ticketlist.map(item => <Ticketitem key={item.text}  text={item.text} num={item.number} />)
            }
        </ul>
    )
 }