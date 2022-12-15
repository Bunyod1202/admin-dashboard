import "./mainheader.scss"
import React from 'react'

export function Mainheader() {
  return (
    <div className="chart-header">
       <div className="chart-header-date">
        <p className="today-trends">Today’s trends</p>
        <span className="trends-date">as of 25 May 2019, 09:41 PM</span>
       </div>

       <div className="chart-header-day">
        <span className="today">Today</span>
       <span className="yesterday">Yesterday</span>
       </div>
    </div>
  )
}
