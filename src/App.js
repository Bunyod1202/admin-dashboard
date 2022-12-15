import './assets/style/main.scss'
import { CardList } from './components/card/cardlist/CardList';
import { Header } from './components/header/Header';
import {Menu} from './components/menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className='hiro'>
        <Header />
        <CardList/>
      </div>
    </div>
  );
}

export default App;
