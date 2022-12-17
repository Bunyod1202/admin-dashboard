import { NavLink } from "react-router-dom";
import "./menuitem.scss"

export const Item = ({ id, icon, title}) => {
 
  return (
    <li  key={id}>
      <NavLink to={`/${title}`}   className={({isActive})=> isActive ? "menu-item item-active" : "menu-item"}  >
        {icon}
        <span className="text">{title}</span>
      </NavLink>
      
    </li>
  );
};

