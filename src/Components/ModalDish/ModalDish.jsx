import classNames from 'classnames';
import React from 'react';
import propTypes from 'prop-types';
import closeSvg from '../../assets/images/close.svg';
import './modal.scss';

const ModalDish = ({
  ingredients, onClose, name, rgba,
}) => (
  <div className="food__modal">
    <div
      style={{ background: `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})` }}
      className={classNames('food__modal__image-block')}
    >
      <img src={closeSvg} alt="" onClick={onClose} />
    </div>
    <div className="food__modal__content">
      <div className="food__modal__content-container">
        <div className="food__modal__content-title">
          <h3>{name}</h3>
        </div>
        <div className="food__modal__content-ingredients">
          <ul>
            {
              ingredients.map((item) => (
                <li>{item}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>

  </div>
);

ModalDish.propTypes = {
  rgba: propTypes.arrayOf(propTypes.number),
  name: propTypes.string,
  ingredients: propTypes.array,
  back: propTypes.string,
  onClose: propTypes.func,
};

export default ModalDish;
