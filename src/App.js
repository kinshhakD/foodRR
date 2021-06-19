import './App.css';
import Dish from './Components/Dish/Dish';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

import DB from './db.json';
import { data } from './db';
import { React, useState } from 'react';
import ModalDish from './Components/ModalDish/ModalDish';

function App() {

  const [isModal, setActiveModal] = useState(false);

  const toggleModal = (dish) => setActiveModal({ open: !isModal, dish })

  const [isModalNew, setActiveModalNew] = useState(false);

  return (
    <div className='food'>
      <Sidebar />
      <div className="food__content">
        <Header />
        <div className='food__content__dishes'>
          {
            data.Dishes.map(dish => (<Dish 
              image={dish.picture}
              name={dish.name}
              key={dish.id}
              onClick={() => toggleModal(dish)} />))
          }
        </div>
      </div>
      <div className='food__content__modal' id='modal'>
        {
          isModal && <ModalDish name={isModal.dish.name} picture={isModal.dish.picture} ingredients={isModal.dish.ingredients} />
        }
      </div>
    </div>
  );
}

export default App;
