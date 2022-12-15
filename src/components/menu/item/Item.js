import { useState } from "react";
import "./menuitem.scss"

export const Item = ({ id, icon, title, menuList}) => {
  const [active, setActive] = useState(false)
 
  return (
    <li  key={id}  className={active ===false ? "menu-item ":"menu-item item-active"} onClick={()=>setActive(!active)}  >
      <a href="/">
        {icon}
        <span className="text">{title}</span>
      </a>
      
    </li>
  );
};

