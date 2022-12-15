import React from 'react'
import "./maincardticket.scss"
import { Ticketsheader } from './ticketheader/Ticketsheader'
import { Ticketslists } from './ticketlist/ticketlists/Ticketslists'

export function Maincardtickets() {
  return (
    <div className='ticket-card'>
        <Ticketsheader />
        <Ticketslists />
    </div>
  )
}
