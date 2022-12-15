import React from 'react'
import "./ticketsheader.scss"

export  function Ticketsheader() {
  return (
    <div className='ticket-header'>
        <div>
            <h3 className='ticket-header-title'>Unresolved tickets</h3>
            <p className='ticket-header-text'>Group: <strong className='support'>Support</strong></p>
        </div>
        <button className='details-link' type='button'>
        View details
        </button>
    </div>
  )
}
