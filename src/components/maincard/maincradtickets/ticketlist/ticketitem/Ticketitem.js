import React from 'react'
import "./ticketitem.scss"


export  const Ticketitem = ({text,num}) => {

  return (
    <li className="ticket-item">
        <p className="ticket-text">{text}</p>
        <span className="ticket-num">{num}</span>
    </li>
  )
}
