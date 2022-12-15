import'./header.scss'
import Photo from '../../assets/images/photo.png'
import { Bell, Search } from '../../assets/icons/fullIcons';
export const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <h2 className='title'>Overview</h2>

        <div className="header-right">
          <form>
            <input type="search" className='search' />
            <button className='btn-search'><Search/></button>
          </form>
          <button className='btn-bell'><Bell/></button>
          <span className='line'></span>
          <div className="user">
            <p className='user-name'>Jones Ferdinand</p><img src={Photo} alt="user" />
          </div>
        </div>
      </div>
    </header>
  );
};

