import React from 'react';
import img1 from '../assets/images/avatar/1.png'
import img2 from '../assets/images/avatar/2.png'
import img3 from '../assets/images/avatar/3.png'
import img4 from '../assets/images/avatar/4.png'
import img5 from '../assets/images/avatar/5.png'
import img6 from '../assets/images/avatar/6.png'
import img7 from '../assets/images/avatar/7.png'
import img8 from '../assets/images/avatar/8.png'
import {Sort, Filter, ArrowLeft, ArrowReft, Menus, SelectArrow} from "../assets/icons/fullIcons"
import "./tickets.scss"

export const Tickets = () => {
  const usertickets = [
    {
      id: 1,
      ticket_imag:{img5},
      ticket_name: 'Contact Email not Linked',
      ticket_date: "Updated 1 day ago",
      cusrtem_name: 'Tom Cruise',
      cusrtem_date: 'on 24.05.2019',
      date_date: 'May 26, 2019',
      date_time: "6:30 PM",
      priority_text:"High",
      priority_color:"#F12B2C",
    },
    {
      id: 2,
      ticket_imag: { img1 },
      ticket_name: 'Adding Images to Featured Posts',
      ticket_date: "Updated 1 day ago",
      cusrtem_name: 'Matt Damon',
      cusrtem_date: 'on 24.05.2019',
      date_date: 'May 26, 2019',
      date_time: "8:00 AM",
      priority_text: "low",
      priority_color:"#FEC400",
    },
    {
      id: 3,
      ticket_imag: { img3 },
      ticket_name: 'When will I be charged this month?',
      ticket_date: "Updated 1 day ago",
      cusrtem_name: 'Robert Downey',
      cusrtem_date: 'on 24.05.2019',
      date_date: 'May 26, 2019',
      date_time: "7:30 PM",
      priority_text: "High",
      priority_color:"#F12B2C",
    },
    {
      id: 4,
      ticket_imag: { img2 },
      ticket_name: 'Payment not going through',
      ticket_date: "Updated 2 days ago",
      cusrtem_name: 'Christian Bale',
      cusrtem_date: 'on 24.05.2019',
      date_date: 'May 25, 2019',
      date_time: "5:00 PM",
      priority_text: "Normal",
      priority_color:"#29CC97",
    },
    {
      id: 5,
      ticket_imag: { img8 },
      ticket_name: 'Unable to add replies',
      ticket_date: "Updated 2 days ago",
      cusrtem_name: 'Henry Cavil',
      cusrtem_date: 'on 24.05.2019',
      date_date: 'May 25, 2019',
      date_time: "4:00 PM",
      priority_text: "High",
      priority_color:"#F12B2C",
    },
    {
      id: 6,
      ticket_imag: { img4 },
      ticket_name: 'Downtime since last week',
      ticket_date: "Updated 3 days ago",
      cusrtem_name: 'Chris Evans',
      cusrtem_date: 'on 23.05.2019',
      date_date: 'May 25, 2019',
      date_time: "2:00 PM",
      priority_text: "Normal",
      priority_color:"#29CC97",
    },
    {
      id: 7,
      ticket_imag: { img6 },
      ticket_name: 'Referral Bonus',
      ticket_date: "Updated 4 day ago",
      cusrtem_name: 'Sam Smith',
      cusrtem_date: 'on 22.05.2019',
      date_date: 'May 25, 2019',
      date_time: "11:30 AM",
      priority_text: "low",
      priority_color:"#FEC400",
    },
    {
      id: 8,
      ticket_imag: { img7 },
      ticket_name: 'How do I change my password?',
      ticket_date: "Updated 6 days ago",
      cusrtem_name: 'Steve Rogers',
      cusrtem_date: 'on 21.05.2019',
      date_date: 'May 24, 2019',
      date_time: "1:00 PM",
      priority_text: "Normal",
      priority_color:"#29CC97",
    }
  ]
  return (
    <div className='box-ticket'>
      
      <div className='tickets-header'>
        <h3 className='allticket'>All tickets</h3>
        <div className='filterSort'>
            <div>
             <img src={<Sort/>} alt="sorting" />
             <span className='sorting'>Sort</span>
            </div>
            <div>
             <img src={<Filter/>} alt="sorting" />
             <span className='filtering'>Filter</span>
            </div>
        </div>
      </div>
      
      <div className='tickets'>
            <div className='ticket-top'>
              <p className='first'>Ticket details</p>
              <p className='second'>Customer name</p>
              <p className='third'>Date</p>
              <p className='four'>Priority</p>
            </div>
            <ul className='ticket-list'>
              {
              usertickets.map(item =>  <li className='ticketitem' key={item.id}>
                <div className='ticket-detail'>
                  <img className='ticket-img' src={item.ticket_imag} alt="image" />
                   <div className='ticket-name'>
                    <p className='style'>{item.ticket_name}</p>
                    <p className='styleop'>{item.ticket_date}</p>
                  </div>
                </div>
                
                <div className='ticket-content'>
                    <div className='customer-names'>
                      <p className='style'>{item.cusrtem_name}</p>
                      <span className='styleop'>{item.cusrtem_date}</span>
                    </div>

                    <div className='customer-dates'>
                      <p className='style'>{item.date_date}</p>
                      <p className='styleop'>{item.date_time}</p>
                    </div>
                    <span style={{backgroundColor:item.priority_color}} className='info-ticket'>{item.priority_text}</span>
                    <img className='menu-icon' src={<Menus/>} alt="menu" />
                </div>
              </li>)
              }
            </ul>
            <div className='tickets-footer'>
              <p className='select-arrow'>Rows per page: <p className='countpage'>8 <img src={SelectArrow} alt=""/></p></p>
              <span className='allpages'>1-8 of 1240</span>
              <div>
                <img src={ArrowLeft} alt="left" />
                <img src={ArrowReft} alt="right" />
              </div>
            </div>
      </div>

    </div>
  );
};

