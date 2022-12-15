import React from 'react';
import { Agents, Articles, Contacts, Ideas,  Overview, Settings, Subscription, Tickets } from "../../../assets/icons/fullIcons";
import { Item } from '../item/Item';
import './menulist.scss'

const menuList = [
  {
    icon: <Overview  />,
    title: "Overview",
    id:"1"
  },
  {
    icon: <Tickets />,
    title: "Tickets",
    id:"2"
  },
  {
    icon: <Ideas />,
    title: "Ideas",
    id:"3"
  },
  {
    icon: <Contacts />,
    title: "Contacts",
    id:"4"
  },
  {
    icon: <Agents />,
    title: "Agents",
    id:"5"
  },
  {
    icon: <Articles />,
    title: "Articles",
    id:"6"
  },
  {
    icon: <Settings />,
    title: "Settings",
    id:"7"
  },
  {
    icon: <Subscription />,
    title: "Subscription",
    id:"8"
  }
]
export const List = () => {
  const itemActive = (evt) => {
    if (evt.target.matches("menu-item")) {
      let indexOlatir = evt.target.dataset.id;
      let kino = menuList.find(item => item.id === indexOlatir)
      console.log(kino);
    }
  }
  return (
    <ul className='menu-list' onClick={itemActive}>
     { menuList.map(item => <Item id={item.id} menuList={menuList} icon={item.icon} title={item.title} /> )}
    </ul>
  );
};
