import { React, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Dish from './Components/Dish/Dish';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import ModalDish from './Components/ModalDish/ModalDish';
import CreateDish from './Components/CreateDish/CreateDish';
import closeSvg from './assets/images/close.svg';

function App() {
  const [lists, setLists] = useState([]);

  const [isCreateDish, setIsCreateDish] = useState(false);

  const [selectedDish, setSelectedDish] = useState(null);

  const [categoryList, setCategoryList] = useState(null);

  const [inputSearch, setInputSearch] = useState('');

  const [searchList, setSearchList] = useState(lists);

  const [categorySearch, setCategorySearch] = useState('Все категории...');

  const fetchData = () => {
    axios.get('http://localhost:3000/Dishes').then(({ data }) => {
      setLists(data);

      const setDataCategoryList = () => [...new Set(data.map((item) => item.category))];

      setCategoryList(setDataCategoryList());
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const resultSearch = lists.filter((item) => item.name.toLowerCase().includes(inputSearch));
    setSearchList(resultSearch);
  }, [inputSearch]);

  const postDish = (obj) => {
    axios.post('http://localhost:3000/Dishes', obj).then(() => {
      const newList = [...lists, obj];

      setLists(newList);
      setIsCreateDish(!isCreateDish);
      fetchData();
    });
  };

  const onRemoveDish = (e, id) => {
    e.stopPropagation();
    axios.delete(`http://localhost:3000/Dishes/${id}`).then(() => {
      const newList = lists.filter((item) => item.id !== id);
      setLists(newList);
      fetchData();
    });
  };

  const openSelectedDish = (item) => {
    setSelectedDish(item);
    setIsCreateDish(false);
  };

  const openCreateDish = () => {
    setIsCreateDish(true);
    setSelectedDish(null);
  };

  const onAddCategory = (obj) => {
    const newCategory = [...categoryList, obj];
    setCategoryList(newCategory);
  };

  return (
    <div className="food">
      <Sidebar />
      <div className="food__content">
        <Header onClick={openCreateDish} />
        <div className="food__content__find">
          <div className="find__input">
            <input
              type="text"
              placeholder="Поиск..."
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
            />
            <img src={closeSvg} alt="close" onClick={() => setInputSearch('')} />
            <select
              onChange={(e) => setCategorySearch(e.target.value)}
              value={categorySearch}
            >
              <option>Все категории...</option>
              {
               categoryList
               && categoryList.map((item) => (<option>{item}</option>))
                }
            </select>

          </div>
          <div className="find__list__block">
            {
              inputSearch && searchList.map((item) => (
                <Dish
                  name={item.name}
                  key={item.id}
                  onOpen={() => openSelectedDish(item)}
                  onRemove={(e) => onRemoveDish(e, item.id)}
                  back={item.picture}
                  rgba={item.rgba}
                />
              ))
            }
          </div>

        </div>
        <div className="food__content__dishes">
          {
            lists.length && categorySearch === 'Все категории...' ? lists.map((item) => (
              <Dish
                name={item.name}
                key={item.id}
                onRemove={(e) => onRemoveDish(e, item.id)}
                onOpen={() => openSelectedDish(item)}
                back={item.picture}
                rgba={item.rgba}
              />
            )) : lists.filter((item) => item.category === categorySearch).map((item) => (
              <Dish
                name={item.name}
                key={item.id}
                onRemove={(e) => onRemoveDish(e, item.id)}
                onOpen={() => openSelectedDish(item)}
                back={item.picture}
                rgba={item.rgba}
              />
            ))
          }
        </div>
      </div>
      <div className="food__content__modal">
        {
          selectedDish && (
            <ModalDish
              name={selectedDish.name}
              ingredients={selectedDish.ingredients}
              key={selectedDish.id}
              rgba={selectedDish.rgba}
              onClose={() => setSelectedDish(null)}
            />
          )
        }
        {
          isCreateDish && (
            <CreateDish
              lists={lists}
              onClose={() => setIsCreateDish(!isCreateDish)}
              categoryList={categoryList}
              onAddCategory={onAddCategory}
              postDish={postDish}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
