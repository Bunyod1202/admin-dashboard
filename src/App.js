import './assets/style/main.scss'
import { CardList } from './components/card/cardlist/CardList';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Maincards } from './components/maincard/Maincards';
import {Menu} from './components/menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className='hiro'>
        <Header />
        <CardList/>
        <main>
          <Main />
        </main>
        <div>
        <Maincards />
        </div>
      </div>
    </div>
  );
}

export default App;
