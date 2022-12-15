
import { Logo } from '../../assets/icons/fullIcons';
import { List } from './list/List';
import './menu.scss'
export const Menu = () => {
  return (
    <div className="menu">
      <a className="logo" href="/">
        <Logo/>
      </a>
      <List/>
    </div>
  );
};

