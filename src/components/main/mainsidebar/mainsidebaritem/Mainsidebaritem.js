import "./mainsidebaritem.scss"
import React from 'react'

export  const Mainsidebaritem = ({text,num}) => {

  return (
    <li className="sidebar-item">
        <p className="sidebar-text">{text}</p>
        <span className="sidebar-num">{num}</span>
    </li>
  )
}
