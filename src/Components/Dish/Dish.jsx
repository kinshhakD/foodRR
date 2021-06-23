import classNames from 'classnames';
import React from 'react';
import propTypes from 'prop-types';
import './dish.scss';
import remove from '../../assets/images/trash.svg';

const Dish = ({
  onOpen, name, rgba, onRemove,
}) => (
  <div
    style={{ background: `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})` }}
    className={classNames('food__content__dish')}
    onClick={onOpen}
  >
    <button
      onClick={onRemove}
      type="button"
      className="food__remove__item"
    >
      <img src={remove} alt="remove" />
    </button>
    <div className="food__content__dish-name">
      <span>{name}</span>
    </div>
  </div>
);

Dish.propTypes = {
  onRemove: propTypes.func,
  name: propTypes.string,
  rgba: propTypes.arrayOf(propTypes.number),
  onOpen: propTypes.func,
};

export default Dish;
