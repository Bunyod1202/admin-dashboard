import { Route, Routes } from 'react-router-dom';
import './assets/style/main.scss'
import { Header } from './components/header/Header';
import {Menu} from './components/menu/Menu';
import { Tickets } from './pages/Tickets';
import { Home } from './pages/Home';
import { Error } from './pages/Error';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className='hiro'>
        <Header />
        <div className="intro">
        <Routes>
          <Route path='/Overview' element={<Home/>}/>
          <Route path='/Tickets' element={<Tickets/>}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
