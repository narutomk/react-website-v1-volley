import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Acualités & Nouveautés !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/n1.jpeg'
              text='Elyes Sahli, l’homme de la situation ! '
              label='new'
              path='/services'
            />
            <CardItem
              src='images/test2.png'
              text='Al Hilal Sport de Tunis 0 - 3 Club Africain'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/test2.jpg'
              text='Le Club Africain relance sa section volley-ball'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/test3.jpg'
              text='Volleyball - 1er Journée Club Africain (3) - (0) ASF Testour'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='https://media1.tenor.com/images/31758c6a6b28b6f804cd12d4bd15ec05/tenor.gif?itemid=17437677'
              text='Volleyball : CA 3 - 0 ASF Testour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
