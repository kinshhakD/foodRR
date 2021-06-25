import classNames from 'classnames';
import React, { useState } from 'react';
import propTypes from 'prop-types';
import closeSvg from '../../assets/images/close.svg';
import ColorRange from '../ColorRange/ColorRange';
import './createDish.scss';

const CreateDish = ({
  onClose, categoryList, onAddCategory, postDish,
}) => {
  const [colorOne, setColorOne] = useState(200);

  const [colorTwo, setColorTwo] = useState(200);

  const [colorThree, setColorThree] = useState(200);

  const [opacity, setOpacity] = useState(1);

  const [inputName, setInputName] = useState('');

  const [inputCategory, setInputCategory] = useState('');

  const [selectCategory, setSelectCategory] = useState('Мясо');

  const [inputIngredients, setInputIngredients] = useState('');

  const [isVisiblePopupCategory, setIsVisiblePopupCategory] = useState(false);

  const [ingredientsList, setIngredientsList] = useState([]);

  const onAddIngredient = (value) => {
    if (value) {
      const newList = [...ingredientsList, value];
      setIngredientsList(newList);
      setInputIngredients('');
    }
  };

  const onAddNewCategory = (event) => {
    event.preventDefault();

    if (inputCategory) {
      onAddCategory(inputCategory);
    }
    setIsVisiblePopupCategory(false);
  };

  const removeIngredient = (item) => {
    const newList = ingredientsList.filter((el) => el !== item);

    setIngredientsList(newList);
  };

  const openPopup = (event) => {
    event.preventDefault();
    setIsVisiblePopupCategory(true);
  };

  const closePopup = (event) => {
    event.preventDefault();
    setIsVisiblePopupCategory(false);
    setInputCategory('');
  };

  const postToData = (event) => {
    event.preventDefault();

    if (inputName.length > 3 && ingredientsList.length > 1) {
      const newObj = {
        name: inputName,
        category: selectCategory,
        rgba: [colorOne, colorTwo, colorThree, opacity],
        ingredients: ingredientsList,
      };
      postDish(newObj);
    }
  };

  return (
    <div className="food__modal">
      <div
        className={classNames('food__modal__image-block')}
        style={{ background: `rgba(${colorOne}, ${colorTwo}, ${colorThree}, ${opacity})` }}
      >
        <img src={closeSvg} alt="close" onClick={onClose} />
        <div className="color__range__block">
          <ColorRange onChange={setColorOne} value={colorOne} min={0} max={255} step={1} />
          <ColorRange onChange={setColorTwo} value={colorTwo} min={0} max={255} step={1} />
          <ColorRange onChange={setColorThree} value={colorThree} min={0} max={255} step={1} />
          <ColorRange onChange={setOpacity} value={opacity} min={0.1} max={1} step={0.1} />
        </div>
      </div>
      <div className="food__modal__content">
        <div className="food__modal__content-container">
          <form action="" method="post">
            <div className="food__modal__new-input">
              <input
                type="text"
                className="new__input"
                placeholder="Название блюда..."
                onChange={(event) => setInputName(event.target.value)}
                value={inputName}
              />
            </div>
            <div className="food__modal__category">
              <div className="food__modal__category-flex">
                <select
                  name="category"
                  value={selectCategory}
                  onChange={(e) => setSelectCategory(e.target.value)}
                >
                  {
                    categoryList.map((item) => (
                      <option
                        key={item.id}
                        value={item}
                      >
                        {item}
                      </option>
                    ))
                  }
                </select>
                <div className="food__modal__button">
                  <button
                    type="submit"
                    onClick={
                      isVisiblePopupCategory ? onAddNewCategory : openPopup
                    }
                  >
                    {isVisiblePopupCategory ? 'Подтвердить' : 'Добавить категорию'}
                  </button>
                </div>
              </div>
            </div>
            {
              isVisiblePopupCategory && (
                <div className="new__category-input">
                  <input
                    type="text"
                    name="category"
                    id=""
                    placeholder="Новая категория..."
                    onChange={(event) => setInputCategory(event.target.value)}
                    value={inputCategory}
                  />
                  <img
                    src={closeSvg}
                    alt="close"
                    className="close__new__category-input"
                    onClick={(event) => closePopup(event)}
                  />
                </div>
              )
            }
            <div className="food__modal__ingredients-block">
              <div className="ingredients__input__button">
                <input
                  type="text"
                  placeholder="Ингредиент..."
                  onChange={(event) => setInputIngredients(event.target.value)}
                  value={inputIngredients}
                />
                <button type="button" onClick={() => onAddIngredient(inputIngredients)}>Добавить</button>
              </div>
              <div className="food__modal__ingredients">
                <ul>
                  {
                    ingredientsList
                    && ingredientsList.map((item, index) => (
                      <li key={index}>
                        <span>
                          {index + 1}
                          .
                          {' '}
                          {item}
                        </span>
                        <img src={closeSvg} alt="delete" onClick={() => removeIngredient(item)} />
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="food__modal__post__button">
              <button type="submit" onClick={postToData}>Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

CreateDish.propTypes = {
  lists: propTypes.array,
  categoryList: propTypes.arrayOf(propTypes.string),
  onClose: propTypes.func,
  onAddCategory: propTypes.func,
  postDish: propTypes.func,
};

export default CreateDish;
