import React from 'react';
import { CardList } from '../components/card/cardlist/CardList';
import { Main } from '../components/main/Main';
import { Maincards } from '../components/maincard/Maincards';

export const Home = () => {
  return (
    <>
      <CardList/>
          <Main />
        <Maincards />
    </>
  );
};

