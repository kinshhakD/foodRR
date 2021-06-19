import './App.css';
import Dish from './Components/Dish/Dish';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';


import { React, useEffect, useState } from 'react';
import ModalDish from './Components/ModalDish/ModalDish';
import axios from 'axios';

function App() {

  const [isModal, setActiveModal] = useState(false);

  const [lists, setLists] = useState(null);

  const [selectedDish, setSelectedDish] = useState(null);

  const toggleModal = (dish) => {
    setSelectedDish(dish);
    setActiveModal(!isModal);


  }

  useEffect(() => {
    axios.get('http://localhost:3000/Dishes').then(({ data }) => {
      console.log(data)
      setLists(data)
    })
  }, [])

  return (
    <div className='food'>
      <Sidebar />
      <div className="food__content">
        <Header />
        <div className='food__content__dishes'>
          {
            lists && lists.map((item) => (
              <Dish name={item.name}
                key={item.id}
                onClick={() => toggleModal(item)}
                back={item.picture} />
            ))
          }
        </div>
      </div>
      <div className='food__content__modal'>
        {
          isModal && <ModalDish
            name={selectedDish.name}
            ingredients={selectedDish.ingredients}
            back={selectedDish.picture}
            key={selectedDish.id}
            onClick={() => setActiveModal(!isModal)}
          />
        }
      </div>
    </div>
  );
}

export default App;
